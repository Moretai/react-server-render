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