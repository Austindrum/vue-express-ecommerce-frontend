<template>
    <div>
        <h1>Order Your need</h1>
        <p>Items Check</p>
        <div class="page-index">
            <div class="cart-items jumbotron">
                <div v-for="(item, index) in cartItems" :key="index" class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-2">
                            <img :src="item.image" class="card-img" alt="...">
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.name }}</h5>
                                <p class="card-text">{{ item.price }}</p>
                                <p class="card-text">
                                    <small class="text-muted">{{ item.createAt }}</small>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div>
                                <button 
                                    @click.stop.prevent="item.quantity--" 
                                    :disabled="item.quantity < 1 || item.quantity === 1">-</button>
                                <!-- @change.stop.prevent="inputEditCartItems(item, $event)"  -->
                                <input
                                    type="number"
                                    :value="item.quantity"
                                    disabled>
                                <button 
                                    @click.stop.prevent="item.quantity++">+</button>
                                <span>${{ item.price * item.quantity }}</span>
                            </div>
                            <div>
                                <button @click.stop.prevent="deleteCartItem(index)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div>
                    {{ totalPrice }}
                </div>
            </div>
            <div class="buyer-info jumbotron">
                <form>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">
                                Same as User
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="buyer.email" class="form-control" placeholder="user@example.com">
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" v-model="buyer.name" class="form-control" placeholder="User1">
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" v-model="buyer.address" class="form-control" placeholder="second road 1">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" v-model="buyer.phone" class="form-control" placeholder= "0988777666">
                    </div>
                </form>
            </div>
            <div>
                <button @click="saveOrder">Order</button>
            </div>
        </div>
    </div>
</template>

<script>
import adminAPI from '../apis/admin/auth';
export default {
    name: "Payment",
    data() {
        return {
            cartItems: [],
            buyer: {
                id: "",
                email: "",
                name: "",
                address: "",
                phone: ""
            }
        }
    },
    computed: {
        totalPrice(){
            let total = 0;
            this.cartItems.forEach(item => {
                total += item.price * item.quantity;
            });
            return total;
        },
    },
    methods: {
        inputEditCartItems(item, quantity){
            if(quantity.target.value === "" || parseInt(quantity.target.value) === 0 || parseInt(quantity.target.value) < 0){
                this.cartItems.forEach(cartitem=>{
                    if(cartitem.id === item.id){
                        cartitem.quantity = 1;
                    }
                })
                return false;
            }
            item.quantity = parseInt(quantity.target.value);
        },
        deleteCartItem(index){
            this.cartItems.splice(index, 1);
        },
        async saveOrder(){
            const vm = this;
            try {
                const orderInfo = {
                    cartItems: vm.cartItems,
                    buyerInfo: vm.buyer
                };
                const { data, statusText } = await adminAPI.postOrder(orderInfo);
                console.log(data, statusText);
            } catch (err) {
                console.log(err);
            }
        }
    },
    async created() {
        try {
            const vm = this;
            const cartId = vm.$route.params.cartId;
            const userId = vm.$route.params.userId;
            vm.buyer.id = userId;
            if(cartId !== 'local'){
                const { data, statusText } = await adminAPI.getUserCart(userId, cartId);
                if(statusText !== 'OK' || data.status !== 'success'){
                    throw new Error(statusText);
                }
                data.cartItem.items.forEach(item => {
                    let temp = {
                        CartId: item.CartItem.CartId,
                        id: item.id, 
                        image: item.image, 
                        name: item.name, 
                        price: item.price, 
                        createdAt: item.createdAt,
                        quantity: item.CartItem.quantity
                    }
                    vm.cartItems.push(temp);
                });
            }else{
                vm.$store.state.cartItems.forEach(item=>{
                    let temp = {
                        CardId: null,
                        id: item.product.id,
                        image: item.product.image,
                        name: item.product.name,
                        price: item.product.price,
                        createdAt: item.product.createdAt,
                        quantity: item.quantity
                    }
                    vm.cartItems.push(temp);
                })
            }    
        } catch (err) {
            console.log(err);
        }
    },
}
</script>

<style lang="">
    
</style>