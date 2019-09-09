import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inCart: [],
    items: [
      { 
          invId: 1, 
          name: 'Java How to Program', 
          image: '//placehold.it/200', 
          price: 2000 
      },
      { 
          invId: 2, 
          name: 'Python for Beginners', 
          image: '//placehold.it/200', 
          price: 1499 
      },
      { 
          invId: 3, 
          name: 'JavaScript newbie', 
          image: '//placehold.it/200', 
          price: 499 
      },
      { 
          invId: 4, 
          name: 'Code cracking', 
          image: '//placehold.it/200', 
          price: 299 
      },
      { 
        invId: 5, 
        name: 'Java How to Program', 
        image: '//placehold.it/200', 
        price: 2000 
    },
    { 
        invId: 6, 
        name: 'Python for Beginners', 
        image: '//placehold.it/200', 
        price: 1499 
    },
    { 
        invId: 7, 
        name: 'C++ for Beginners', 
        image: '//placehold.it/200', 
        price: 499 
    },
    { 
        invId: 8, 
        name: 'Code cracking', 
        image: '//placehold.it/200', 
        price: 299 
    }
  ]
  },

  // Getters
  getters:{
    items: state => state.items,
    inCart: state => state.inCart,
  },

  // Mutations
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); }
  },

  // Actions
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); }
  }
});
