import React from 'react'
import Header from '../../components/Header'

// 同构 一套react代码，在服务端执行一次， 再客户端再执行一次

export default class NotFound extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.NotFound = true
    }
  }

  render() {
    
    return (
      <div>
       404, NotFound
      </div>
    )
  }
}