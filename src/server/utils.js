import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


export const render = (req, store, routes) => {

  // const store = getStore()
  // 在这里拿到数据并填充到store中
  // store 里面填充什么，我们要结合当前用户请求地址和路由 / => Home /login => Login
  
  // const matchedRoutes = matchRoutes(routes, req.path)

  // 根据路由路径。往stroe加数据
  

  // 这个不能解决嵌套路由问题
  // routes.some(route => {
  //   const match = matchPath(req.path, route)
  //   if (match) {
  //     matchedRoutes.push(route)
  //     // promises.push(route.loadData(match))
  //   }
  //   // return match
  // })
  // const promises = [];
  // matchedRoutes.forEach(item => {
  //   if (item.route.loadData) {
  //     promises.push(item.route.loadData(store))
  //   }
  // })

  // Promise.all(promises).then(() => {
    // console.log(store.getState())
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </div>
        </StaticRouter>
      </Provider>
    ))
    return `
      <html>
        <head>
          <title>SSR</title>
        </head>
        <body>
          <div id="app">${content}</div>
          <script>
            window.context = {
              state: ${JSON.stringify(store.getState())}
            }
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
      `
  }
  // 让matchRoutes里面所有组件对应loadData方法执行一次  