import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

// const reducer = (state = {name: 'More'}, action) => {
//   return state
// }

// 单例的话所有的用户都是一个store Oops Wrong
const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export default getStore