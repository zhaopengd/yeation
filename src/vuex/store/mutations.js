/* 
包含n个用于直接修改状态数据的方法的对象
*/
import { GET_HOME_DATA, GET_CATEGORY_DATA } from './mutation-types'
export default {
  [GET_HOME_DATA](state, { homeData }) {
    state.homeData = homeData // mutation直接操作状态
  },
  [GET_CATEGORY_DATA](state, { categoryData }) {
    state.categoryData = categoryData // mutation直接操作状态
  }
}
