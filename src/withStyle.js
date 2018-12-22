import React, { Component } from 'react'

export default (styles) => (DecoratedComponent) => {
  return class NewComponent extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }

    componentDidMount() {
      console.log('HOC componentDidMount');
    }

    render() {
      console.log('HOC render');
      return <DecoratedComponent {...this.props} />
    }
  }
}