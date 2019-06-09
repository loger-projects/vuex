import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {name : 'Banana Skin', price: 20, inStock: true},
      {name: 'Benjamin Pagac II', price: 30, inStock: true},
      {name: 'Bessie Lowe', price: 60, inStock: false},
      {name: 'Ivory Mante', price: 90, inStock: false},
      {name: 'Madaline Legros', price: 120, inStock: true},
      {name: 'Alexie Baumbach', price: 80, inStock: false},
    ],
    count: 1
  },
  getters: {
    outStockProducts: state => state.products.filter(product => !product.inStock),

    outeStockProductsCount: (state, getters) => getters.outStockProducts.length,

    getCount: state => state.count
  },
  mutations: {
    increaseProductPrice (state, target) {
      for (let product of state.products) {
        if(product.name === target.name) {
          state.products[state.products.indexOf(product)].price = target.price
        }
      }
    },
    increment(state) {
      state.count++
    },
    doubleIncrement(state) {
      state.count *= 2
    },
    getData(state, target) {
      return new Promise((resolve, reject) => {
        if (target.resolve) {
          resolve(target.args)
        } else {
          reject(target.error)
        }
      })
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    doubleIncrement ({commit}) {
      commit('doubleIncrement')
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    async actionA (context) {
      // assuming `getData()` return Promises
      context.commit('gotData', await context.state.getData())
    },
    
  },
  modules: {
    
  }
})
