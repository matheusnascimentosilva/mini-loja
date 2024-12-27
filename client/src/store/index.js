import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      products: [
        { id: 1, name: 'Produto 1', price: 100, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Produto 2', price: 150, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Produto 3', price: 200, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Produto 4', price: 250, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Produto 5', price: 300, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Produto 6', price: 350, image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Produto 7', price: 400, image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Produto 8', price: 450, image: 'https://via.placeholder.com/150' },
      ],
      cart: []
    };
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    cartItems(state) {
      return state.cart;
    }
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    clearCart(state) {
      state.cart = [];
    }
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeProductFromCart({ commit }, productId) {
      commit('removeFromCart', productId);
    },
    clearCart({ commit }) {
      commit('clearCart');
    }
  }
});
