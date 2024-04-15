import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { thunk } from 'redux-thunk' // redux中间件：让 dispatch 可以传入函数
import logger from 'redux-logger' // redux中间件：dispatch时自动打印log



// 创建store, 需要传入一个reducer函数作为参数
// applyMiddleware: 添加redux中间件，增强 dispatch 的功能
const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store
