import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHomeList } from './store/actions'
import style from  './style.css'
import withStyle from '../../withStyle'
import { Helmet } from "react-helmet"

// 同构 一套react代码，在服务端执行一次， 再客户端再执行一次

@connect(
  state => ({
    name: state.home.name,
    list: state.home.newsList
  }),
  dispatch => ({
    getHomeList() {
      dispatch(getHomeList())
    }
  })
)
@withStyle(style)
export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount() {
  //   if (this.props.staticContext) {
  //     this.props.staticContext.css.push(style._getCss())
  //   }
  // }

  // componentWillMount() {
  //   console.log('====================================');
  //   console.log('Home 你妈逼你结婚了吗？');
  //   console.log('====================================');
  // }

  componentDidMount() {
    this.props.getHomeList()
  }

  render() {
    return (
      <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>My SEO Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
        <Header staticContext={this.props.staticContext} />
        <h1 className={style.hello}>Home</h1>
        <h1>name {this.props.name}</h1>
        {
          Array.isArray(this.props.list) && this.props.list.map((x, idx) => <h1 key={x.age}>{x.name} {x.age}</h1>)
        }
        <button onClick={() => alert('hi')}>CLICK ME</button>
      </div>
    )
  }
}

Home.loadData = (store) => {
  // 这个函数负责在服务器渲染之前，把这个路由需要的数据提前加载好
  return store.dispatch(getHomeList())
}