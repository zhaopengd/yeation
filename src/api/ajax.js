/*  
axios 函数封装

  1. 请求拦截器
    - post请求参数转化
    - 如果需要token 则从状态中读取
  2. 响应拦截器
    - 直接返回res.data
    统一处理异常
*/
import axios from 'axios'
import store from '../vuex/store'
import qs from 'qs'
import { Toast } from 'mint-ui'

// 请求拦截器
axios.interceptors.request.use(config => {
  const { method, data } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 转化为 urlencode形式
    config.data = qs.stringify(data)
  }
  if (config.headers.needToken) {
    // const token = store.state.token
    const token = store.state.user.token
    /*  - 没有token 不发请求，直接进入失败的流程 */
    if (!token) {
      const error = new Error('没有token，不能发送请求')
      error.status = 401 // 401 请求的资源不存在 （token过期）
      throw error
    } else {
      // - 有token ，添加到请求头中：Authorization=token
      config.headers['Authorization'] = token
    }
  }
  return config
})
// 添加响应拦截器
// 功能1: 让请求成功的结果不再是response, 而是response.data的值
// 功能2: 统一处理所有请求的异常错误
// 在请求返回之后且在我们指定的请求响应回调函数之前
axios.interceptors.response.use(
  function(response) {
    return response.data // 返回的结果就会交给我们指定的请求响应的回调
    // return response // 返回的结果就会交给我们指定的请求响应的回调
  },
  function(error) {
    // 统一处理所有请求的异常错误
    Toast(error)
    // return Promise.reject(error);
    // 返回一个pending状态的promise, 中断promise链
    return new Promise(() => {})
  }
)

export default axios
