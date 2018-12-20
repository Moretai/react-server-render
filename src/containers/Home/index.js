import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHomeList } from './store/actions'

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
export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getHomeList()
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Home</h1>
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