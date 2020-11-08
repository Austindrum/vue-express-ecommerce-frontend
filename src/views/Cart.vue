<template>
    <div class="row">
        <div class="col-md-7">
            <div v-if="cartItems.length < 1">
                <h1>No Cart Item</h1>
            </div>
            <div v-else class="card mb-3" v-for="item in cartItems" :key="item.product.id">
                <div class="row no-gutters">
                    <div class="col-md-2">
                        <img :src="item.product.image" class="card-img" alt="...">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.product.name }}</h5>
                            <p class="card-text">{{ item.product.description }}</p>
                            <p class="card-text"><small class="text-muted">{{ item.product.createdAt }}</small></p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div>
                            <button 
                                @click.stop.prevent="editCartItems('-', item.product, 1), item.quantity--" 
                                :disabled="item.quantity < 1 || item.quantity === 1">-</button>
                            <input
                                @change.stop.prevent="editCartItems('inp', item.product, $event), item.quantity = $event.target.value" 
                                type="number" 
                                :value="item.quantity">
                            <button 
                                @click.stop.prevent="editCartItems('+', item.product, 1), item.quantity++">+</button>
                            <span>${{ item.product.price * item.quantity }}</span>
                        </div>
                        <div>
                            <button @click.stop.prevent="deleteCartItem(item.product.id)">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5 card">
            <template v-if="isLogin">
                <div>
                    <h3>User Information</h3>
                    <div>
                        Name: {{ currentUser.name }}<br/>
                        Email: {{ currentUser.email }}<br/>
                        Tel: {{ currentUser.tel }}<br/>
                        Address: {{ currentUser.address }}<br/>
                    </div>
                    <button>Save cart</button>
                    <button>Payment</button>
                </div>
            </template>
            <template v-else>
                <button @click.stop.prevent="openLogin">Login</button>
            </template>
            <div v-for="item in cartItems" :key="item.product.id">
                {{ item.product.name }} * {{ item.quantity }} = {{ item.product.price * item.quantity }}
            </div>
            <hr>
            Total: {{ totalPrice }} 
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import $ from 'jquery';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            'isLogin',
            'currentUser'
        ]),
        cartItems(){
            return this.$store.state.cartItems;
        },
        totalPrice(){
            let total = 0;
            this.$store.state.cartItems.forEach(item => {
                total += item.product.price * item.quantity;
            });
            return total;
        },
    },
    methods: {
        editCartItems(status, product, quantity = 1){
            if(status === "inp"){
                if(quantity.target.value === "" || parseInt(quantity.target.value) === 0){
                    return quantity.target.value = 1;
                }
                quantity = parseInt(quantity.target.value);
            }
            return this.$store.commit({ type: "setCartItems", status, product, quantity });
        },
        deleteCartItem(id){
            return this.$store.commit({ type: "deleteItem", id });
        },
        openLogin(){
            $('#sign-in-modal').modal('show');
        }
    },
}
</script>

<style lang="">
    
</style>