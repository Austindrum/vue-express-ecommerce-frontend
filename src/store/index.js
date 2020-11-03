import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const GET_LOCALSTORAGE = () => localStorage.getItem("austin_ecommerce");
const SET_LOCALSTORAGE = (value) => localStorage.setItem("austin_ecommerce", value);

export default new Vuex.Store({
  state: { 
    cartItems: JSON.parse(GET_LOCALSTORAGE()) === null ? 0 : JSON.parse(GET_LOCALSTORAGE()),
  },
  mutations: {
    setCartItems(state, payload){
      let cartItems = JSON.parse(GET_LOCALSTORAGE()) || [];
      let isExsit = cartItems.map(item => item.product.id).includes(payload.product.id);
      if(isExsit){
        if(payload.status === "-"){
          cartItems.map(item => {
            if(item.product.id === payload.product.id) return item.quantity--;
            return item;
          })
        }
        if(payload.status === "+"){
          cartItems.map(item => {
            if(item.product.id === payload.product.id) return item.quantity++;
            return item;
          })
        }
        if(payload.status === "inp"){
          cartItems.map(item => {
            if(item.product.id === payload.product.id) return item.quantity = parseInt(payload.quantity);
            return item;
          })
        }
      }else{
          cartItems.push({ 
            product: payload.product, 
            quantity: payload.quantity 
          });
      }
      SET_LOCALSTORAGE(JSON.stringify(cartItems));
      state.cartItems = cartItems === null ? 0 : cartItems;
    },
    deleteItem(state, payload){
      let cartItems = JSON.parse(GET_LOCALSTORAGE());
      let temp = [];
      cartItems.forEach(item => {
        if(item.product.id !== payload.id){
          temp.push(item);
        }
      });
      SET_LOCALSTORAGE(JSON.stringify(temp));
      state.cartItems = temp;
    }
  },
  actions: {

  },
  modules: {
  
  }
})
