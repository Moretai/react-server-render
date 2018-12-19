import React from 'react'

// 同构 一套react代码，在服务端执行一次， 再客户端再执行一次

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>HomessssNjsjjasjajEMMDA</h1>
        <button onClick={() => alert('hi')}>CLICK ME</button>
      </div>
    )
  }
}