import express from 'express'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import { getStore } from '../store'
import { render } from './utils'
const app = express()

app.use(express.static('public'))

app.get('*', function(req, res) {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, req.path)
  console.log('====================================');
  console.log('matchedRoutes', matchedRoutes);
  console.log('====================================');

  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
      // promises.push(item.route.loadData(store))
    }
  })
  // 一个页面要加载 A,B,C,D四个组件，这四个组件都需要从服务端加载数据
  // 为了无论如何都走Promise.all方法，我们需要将promise再封装一层
  // 无论单个接口成功与否，都要往到all里 去render.
  // TODO: 每个接口加个promise.race(, timer) 设置时间。

  Promise.all(promises).then(() => {
    const context = {
      css: []
    }
    const html = render(req, store, routes, context)
    console.log('====================================');
    console.log('server context', context);
    console.log('====================================');

    if (context.action === "REPLACE") {
      res.status(301, context.url)
    } else if (context.NotFound) {
      console.log('404');
      return res.status(404).send(html)
    } else {
      res.send(html)
    }
  })
})

app.listen(3000, () => {
  console.log("server run at port 3000")
})