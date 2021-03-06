import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

// export default (
//   <div>
//     <Route path="/" exact={true} component={Home}></Route>
//     <Route path="/login" exact={true} component={Login}></Route>
//   </div>
// )

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData,
    key:'home',
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    key:'login',
  },
  {
    component: NotFound,
    exact: true,
    key: 'notfound'
  }
]