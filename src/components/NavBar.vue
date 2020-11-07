<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Brand</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cart">Cart-<span>{{ getCartItemsNum }}</span></router-link>
                </li>
                <li v-if="isLogin">
                    <button class="btn btn-primary" @click.stop.prevent="logout">Logout</button>
                </li>
                <template v-else>
                    <Signin/>
                    <Signup/>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
import Signin from './Signin';
import Signup from './Signup';
export default {
    data() {
        return {

        }
    },
    components: {
        Signin,
        Signup
    },
    computed: {
        getCartItemsNum(){
            return this.$store.state.cartItems.length;
        },
        ...mapState(['currentUser', 'isLogin'])
    },
    methods: {
        logout(){
            this.$store.commit('logout');
        }
    },
}
</script>

<style lang="">
    
</style>