<template>
    <div>
        <h1>Your Profile</h1>
        <div class="jumbotron">
            <div class="row">
                <div class="col-md-5 border-right">
                    <img class="rounded-lg" style="width:150px; height:150px" :src="user.avatar" alt=""><br/>
                    <h1 class="display-5">{{ user.name }}'s Info</h1>
                    <p>Email: {{ user.email }}</p>
                    <p>Address: {{ user.address }}</p>
                    <p>Tel: {{ user.tel }}</p>
                    <button class="btn btn-warning btn-sm" data-toggle="modal" data-target="#profile-modal">Edit Profile</button>
                    <!-- Edit Profile Modal -->
                    <div class="modal fade" id="profile-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form @submit.stop.prevent="userEdit">
                                        <div class="form-group">
                                            <img class="rounded-lg" style="width:150px; height:150px" :src="templateImg" alt=""><br/>
                                            <label>Avatar</label>
                                            <input
                                            id="image"
                                            name="image"
                                            type="file" 
                                            class="form-control"
                                            @change="fileChange">
                                        </div>
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input
                                            id="name"
                                            name="name"
                                            v-model="user.name"
                                            type="text" 
                                            class="form-control"
                                            :class="{ 'is-invalid' : nameErr }"
                                            placeholder="Your Name">
                                            <div v-if="nameErr" class="invalid-feedback">
                                                {{ nameErr }}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input
                                            id="address"
                                            name="address"
                                            v-model="user.address"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Your Address">
                                        </div>
                                        <div class="form-group">
                                            <label>Tel</label>
                                            <input
                                            id="tel"
                                            name="tel"
                                            v-model="user.tel"
                                            type="text" 
                                            class="form-control"
                                            placeholder="Your Phone">
                                        </div>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Edit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <h4>Store Carts</h4>
                    <div v-for="(cart, key) in userCarts" :key="key" class="card mb-3">
                        <div class="card-body row">
                            <div class="col-md-8">
                                <h5 class="card-title">
                                    <a href="#" data-toggle="modal" :data-target="`#cart${key}`">Card {{key}}</a>
                                </h5>
                            </div>
                            <div class="col-md-4">
                                <button @click.stop.prevent="deleteUserCart(cart[0].CartItem.CartId)" class="btn btn-danger btn-sm ml-1">Delete</button>
                                <button 
                                v-if="cart[0].ordered"
                                @click.stop.prevent="toPage(cart[0].orderId)"
                                class="btn btn-success btn-sm ml-1">Payment</button>
                                <button 
                                v-else
                                @click.stop.prevent="toPage(cart[0].CartItem.CartId, user.id)"
                                class="btn btn-primary btn-sm ml-1">Order</button>
                                <!-- <template v-if="cart[0].ordered">
                                    <router-link
                                    :to="{name:'payment', params:{ orderId: cart[0].orderId }}" 
                                    class="btn btn-success btn-sm ml-1">Payment {{ cart[0].orderId }}</router-link>
                                </template>
                                <template v-else>
                                    <router-link 
                                    :to="{name:'order', params:{ cartId: cart[0].CartItem.CartId, userId: user.id }}" 
                                    class="btn btn-primary btn-sm ml-1">Order</router-link>
                                </template> -->
                            </div>
                        </div>
                        <!-- Cart Modal -->
                        <div class="modal fade" :id="`cart${key}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Cart {{key}} Items</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div v-for="item in cart" :key="item.id" class="card mb-1">
                                            <div class="row no-gutters">
                                                <div class="col-md-2">
                                                    <img :src="item.image" class="card-img" alt="...">
                                                </div>
                                                <div class="col-md-6 p-2">
                                                    <h6 class="">{{ item.name }}</h6>
                                                    <small class="text-muted">{{ item.createdAt }}</small>
                                                </div>
                                                <div class="col-md-4">
                                                    <p>
                                                        {{ item.price }} * {{ item.quantity }} = {{ item.price * item.quantity }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import adminAPI from '../apis/admin/auth';
export default {
    data() {
        return {
            user: {},
            templateImg: "",
            nameErr: "",
            userCarts: [],
        }
    },
    methods: {
        toPage(params, user){
            if(user){
                this.$router.push({ name: 'order', params: { cartId: params, userId: user }})
            }else{
                this.$router.push({ name: 'payment', params: { orderId: params }})
            }
        },
        fileChange(e){
            const files = e.target.files;
            if(!files.length) return;
            this.templateImg = window.URL.createObjectURL(files[0]);
        },
        async deleteUserCart(cartId){
            const vm = this;
            try {
                const { data, statusText } = await adminAPI.deleteUserCart(vm.user.id, cartId);
                if(statusText !== 'OK' || data.status !== 'success'){
                    throw new Error(statusText);
                }
                vm.$router.go("/profile");
                // vm.$router.push("/profile");
            } catch (err) {
                console.log(err);
            }
        },
        async userEdit(e){
            if(!this.user.name) return this.nameErr = "Enter Your Name";
            const form = e.target;
            const formData = new FormData(form);
            // for (let [name, value] of formData.entries()) {
            //     console.log(name + ': ' + value)
            // }
            const vm = this;
            try {
                const { data, statusText } = await adminAPI.putUser(vm.user.id, formData);
                if(statusText !== 'OK' || data.status !== 'success'){
                    throw new Error(statusText);
                }
                vm.$router.go(0);
            } catch (err) {
                console.log(err);
            }
        }
    },
    async created() {
        const vm = this;
        const user = await adminAPI.getCurrentUser();
        const { data } = await adminAPI.getUserCarts(user.data.user.id);
        data.userCarts.forEach(async cart => {
            if(cart[0].ordered){
                let order = await adminAPI.getOrder(cart[0].CartItem.CartId);
                cart[0].orderId = order.data.orderId
            }
        });
        vm.userCarts = data.userCarts;
        vm.user = user.data.user;
        vm.templateImg = user.data.user.avatar;
    },
}
</script>

<style lang="">
    
</style>