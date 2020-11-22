<template>
    <div>
        <Navbar/>
        <div class="container-md cart">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr v-for="item in cartItems" :key="item.id">
                    <td>
                        <div class="cart-info">
                            <img :src="item.product.image" alt="">
                            <div>
                                <p>{{ item.product.name }}</p>
                                <span>Price: ${{ item.product.price }}</span>
                                <br />
                                <a 
                                href="#"
                                @click.stop.prevent="deleteCartItem(item.product.id)">remove</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input
                        @change.stop.prevent="editCartItems(item.product, $event), item.quantity = $event.target.value"
                        type="number" 
                        :value="item.quantity" 
                        min="1">
                    </td>
                    <td>${{ item.product.price * item.quantity }}</td>
                </tr>
            </table>
            <div class="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>$ {{ totalPrice }}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>$ {{ Math.floor(totalPrice * 0.05) }}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$ {{ Math.floor(totalPrice * 1.05) }}</td>
                    </tr>
                </table>
                <a href="#" class="checkout btn">Proceed To Checkout</a>
            </div>
        </div>
    </div>
        <!-- <div class="row">
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
                        <button @click.stop.prevent="saveCart" class="btn btn-primary btn-sm">Save cart</button>
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
        </div> -->
</template>

<script>
import Navbar from '../components/NavBar';
import cartAPI from '../apis/carts';
import { mapState } from 'vuex';
import $ from 'jquery';
export default {
    components: {
        Navbar
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
        editCartItems(product, e){
            let quantity = 0;
            if(e.target.value === "" || parseInt(e.target.value) === 0 || parseInt(e.target.value) < 0){
                e.target.value = 1;
                product.quantity = 1;
                quantity = 1;
            }else{
                quantity = parseInt(e.target.value);
            }
            return this.$store.commit({ type: "setCartItems", product, quantity });
        },
        deleteCartItem(id){
            return this.$store.commit({ type: "deleteItem", id });
        },
        openLogin(){
            $('#sign-in-modal').modal('show');
        },
        async saveCart(){
            try {
                const vm = this;
                if(!vm.currentUser){
                    return vm.$router.push("/");
                }
                if(vm.cartItems.length === 0){
                    return vm.$router.push("/");
                }
                const cartInfo = {
                    cart: vm.cartItems,
                    user: vm.currentUser
                }
                const { statusText, data } = await cartAPI.postCart(cartInfo);
                if(statusText !== 'OK' || data.status !== 'success'){
                    throw new Error(statusText);
                }
                this.$store.commit("clearCartItems");
                this.$router.push("/profile");
            } catch (err) {
                console.log(err);
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.cart {
    margin: 10rem auto;
    table {
        width: 100%;
        border-collapse: collapse;
        th {
            text-align: left;
            padding: 1.5rem;
            color: #fff;
            background-color: #243a6f;
            font-size: 2rem;
            // font-weight: normal;
        }
        th:last-child {
            text-align: right;
        }
        td {
            padding: 1.5rem 0.5rem;
            input {
                width: 5rem;
                height: 3rem;
                padding: 0.5rem;
            }
            a {
                color: orangered;
                font-size: 1.4rem;
            }
            img {
                width: 8rem;
                height: 8rem;
                margin-right: 1rem;
            }
        }
        td:last-child {
            text-align: right;
            padding-right: 2rem;
        }
        .cart-info {
            display: flex;
            flex-wrap: wrap;
        }
    }
    .total-price {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 2rem;
        table {
            border-top: 3px solid #fc7c7c;
            width: 100%;
            max-width: 35rem;
        }
    }
}
@media only screen and (max-width: 567px) {
  .cart-info p {
    display: none;
  }
}
</style>