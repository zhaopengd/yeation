/* 
包含n个用于间接修改状态数据的方法的对象
*/
import {reqMockHome,reqMockCategory} from '../../api/index'
import { GET_HOME_DATA ,GET_CATEGORY_DATA} from './mutation-types'
export default {
  async getHomeData({ commit }) {
    const result = await reqMockHome() // 发送ajax
    const homeData = result.data

    if (result.code === 0) {
      commit(GET_HOME_DATA, { homeData }) // 根据返回的数据调用 mutations 更改数据
    }
  },
//获取商品分类数据
  async getCategoryData ({commit}) {
    const result = await reqMockCategory();    // 发送ajax
    const categoryData = result.data.categoryL1List
    console.log(result);
    
    if (result.code === 0) {
      commit(GET_CATEGORY_DATA, {categoryData})    // 根据返回的数据调用 mutations 更改数据
    }
  }
}
