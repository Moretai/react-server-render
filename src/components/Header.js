import React from 'react'
import withStyle from '../withStyle'
import exampleHoc from '../exampleHoc'
import { Link } from 'react-router-dom'
import style from './style.css'

@withStyle(style)
export default class Header extends React.Component {

  // componentWillMount() {
  //   if (this.props.staticContext) {
  //     console.log('====================================');
  //     console.log('gogo');
  //     console.log('====================================');
  //     this.props.staticContext.css.push(style._getCss())
  //   }
  // }
  componentDidMount() {
    console.log('Header componentDidMount');
  }

  render() {
    console.log('Header render');
    return (
      <div>
        <h1 className={style.header}>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}