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
                <template v-if="isLogin">
                    <li>
                        <router-link class="nav-link" to="/profile">Profile</router-link>
                    </li>
                    <button class="btn btn-primary" @click.stop.prevent="logout">Logout</button>
                </template>
                <template v-else>
                    <button class="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#sign-in-modal">
                        Signin
                    </button>
                    <button class="btn btn-sm btn-primary" type="button" data-toggle="modal" data-target="#sign-up-modal">
                        Signup
                    </button>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {

        }
    },
    components: {

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