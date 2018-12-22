## React Server Render


### basic knowledge
```js
when user firstly enter page, the server will reaturn back html (decide by route),

then returned html in user browser start load js(bundle.js), js will take over control

page. server response only once.
```

### flow

```js
1. 服务器接收到请求， 这个时候store是空的
2. 服务器端不会执行componentDidMount, 所以列表内容获取不到
3. 客户端代码运行，这个时候store也是空的
4. 客户端执行componentDidMount，列表数据被获取
5. store中的列表数据被更新
6. 客户端渲染出store中list数据对应的列表内容
```

### client stroe 和 server store 的统一

```js
数据的脱水(Dehydrate)和注水(Rehydrate)

服务器端渲染产出了HTML,但是交给浏览器网页不管有HTML,还需要有"脱水数据"。这样,
当浏览器渲染的时候，可以直接根据"脱水数据"来渲染React组件,这个过程叫做"注水"。

1. 避免没必要的请求
2. 保证两端的结果一致，网页不会闪动
```

### 使用Node作为数据获取中间层

- 数据代理转发
- cookie登陆状态传递
- axios实例等概念。

```js

1.store 分为clientStore 和 serverStore
2. redux-thunk 绑定额外的API传入不同axios的实例
3. in node server, http-proxy 代理转发。

```
