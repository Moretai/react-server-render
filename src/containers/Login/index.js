import React from 'react'
import Header from '../../components/Header'

// 同构 一套react代码，在服务端执行一次， 再客户端再执行一次

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Login</h1>
        <button onClick={() => alert('hi')}>CLICK ME</button>
      </div>
    )
  }
}