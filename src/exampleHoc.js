import React, { Component } from 'react'

export default (DecoratedComponent) => {
  return class NewComponent extends Component {

    componentDidMount() {
      console.log('UPPER HOC componentDidMount');
    }

    render() {
      console.log('UPPER HOC render');
      return <DecoratedComponent {...this.props} />
    }
  }
}