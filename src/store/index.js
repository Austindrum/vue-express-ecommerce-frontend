import Vue from 'vue'
import Vuex from 'vuex'
import adminUserAPI from '../apis/admin/auth'

Vue.use(Vuex)

const GET_LOCALSTORAGE = () => localStorage.getItem("austin_ecommerce");
const SET_LOCALSTORAGE = (value) => localStorage.setItem("austin_ecommerce", value);

export default new Vuex.Store({
  state: { 
    cartItems: JSON.parse(GET_LOCALSTORAGE()) === null ? [] : JSON.parse(GET_LOCALSTORAGE()),
    currentUser: {
      id: '',
      name: '',
      email: '',
      address: '',
      avatar: '',
      role: ''
    },
    isLogin: false,
    token: ''
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
    clearCartItems(state){
      state.cartItems = [];
      localStorage.removeItem("austin_ecommerce");
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
    },
    setCurrentUser (state, payload) {
      state.currentUser = {
        id: payload.user.id,
        name: payload.user.name,
        email: payload.user.email,
        address: payload.user.address,
        tel: payload.user.tel,
        avatar: payload.user.avatar,
        role: payload.user.role,
      }
      state.isLogin = true
      state.token = localStorage.getItem("austin_token")
    },
    logout(state){
      state.currentUser = {};
      state.isLogin = false;
      state.token = "";
      localStorage.removeItem("austin_token");
    }
  },
  actions: {
    async fetchCurrentUser({commit}){
      try {
        const { data, statusText } = await adminUserAPI.getCurrentUser();
        if(statusText === 'OK' && data.status === "success"){
          // throw new Error(`statusText: ${statusText}, ${data.mesage}`);
          const user = {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            address: data.user.address,
            tel: data.user.tel,
            avatar: data.user.avatar,
            role: data.user.role
          }
          commit({
            type: 'setCurrentUser', 
            user
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  
  }
})
