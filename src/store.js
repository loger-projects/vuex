import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './store/mutations'
import actions from './store/actions'
import modules from './store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {name : 'Banana Skin', price: 20},
      {name: 'Benjamin Pagac II', price: 30},
      {name: 'Bessie Lowe', price: 60},
      {name: 'Ivory Mante', price: 90}
    ]
  },
  getters: {
    saleProducts: state => {
      return state.products.map(product => {
        return {
            name: '**' + product.name + '**',
            price: product.price / 2
        }
      })
    }
  },
  mutations,
  actions,
  modules
})
