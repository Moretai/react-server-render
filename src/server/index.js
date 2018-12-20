import React from 'react'

import { renderToString } from 'react-dom/server'
import express from 'express'
import Home from '../containers/Home'

const app = express()

app.use(express.static('public'))

const content = renderToString(<Home />)

app.get('/', function(req, res) {
  res.send(
    `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
    `
  )
})

app.listen(3000, () => {
  console.log("server run at port 3000")
})