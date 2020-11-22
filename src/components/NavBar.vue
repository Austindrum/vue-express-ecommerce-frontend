<template>
    <nav class="nav">
        <div class="navigation container">
            <div class="logo">
                <h1>AushoP</h1>
            </div>
            <div class="menu">
                <div class="top-nav">
                    <div class="logo">
                        <h1>AushoP</h1>
                    </div>
                    <div class="close" @click.stop.prevent="closeNav">
                        <box-icon 
                        name='x'
                        color='#fff'
                        size="lg"></box-icon>
                    </div>
                </div>
                <ul class="nav-list">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#contact">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Account</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link icon" to="/cart">
                            <box-icon 
                            size="lg"
                            name='cart'></box-icon>
                        </router-link>
                    </li>
                </ul>
            </div>
            <router-link class="cart-icon" to="/cart">
                <box-icon 
                type='solid' 
                size="lg"
                name='cart'></box-icon>
            </router-link>
            <div class="hamburger" @click.stop.prevent="openNav">
                <box-icon
                size="lg"
                name='menu'></box-icon>
            </div>

        </div>
    </nav>
    <!-- <router-link class="navbar-brand" to="/">Brand</router-link> -->
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarNav">
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
    </div> -->
</template>

<script>
import 'boxicons';
import gsap from 'gsap'
import { mapState } from 'vuex';
export default {
    computed: {
        getCartItemsNum(){
            return this.$store.state.cartItems.length;
        },
        ...mapState(['currentUser', 'isLogin'])
    },
    methods: {
        logout(){
            this.$store.commit('logout');
        },
        openNav(){
            const app = document.getElementById("app");
            const menu = document.querySelector('.menu');
            const navBar = document.querySelector('.nav');
            const navLeft = menu.getBoundingClientRect().left;
            if(navLeft < 0){
                menu.classList.add("show");
                app.classList.add("show");
                navBar.classList.add("show");
            }
        },
        closeNav(){
            const app = document.getElementById("app");
            const menu = document.querySelector('.menu');
            const navBar = document.querySelector('.nav');
            const navLeft = menu.getBoundingClientRect().left;
            if(navLeft === 0){
                menu.classList.remove("show");
                app.classList.remove("show");
                navBar.classList.remove("show");
            }
        },
    },
    mounted(){
        // gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
        gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.8, x: 20 });
        const navBar = document.querySelector('.nav');
        const navHeight = navBar.getBoundingClientRect().height;
        window.addEventListener('scroll', ()=>{
            const scorllHeight = window.pageYOffset;
            if(scorllHeight > navHeight){
                navBar.classList.add("fix-nav");
            }else{
                navBar.classList.remove("fix-nav");    
            }
        })
    },
}
</script>

<style lang="scss">
.nav{
    padding: 1.6rem 0;
}
.nav.fix-nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #243a6f;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 999;
}
.nav.fix-nav .nav-link,
.nav.fix-nav .logo,
.nav.fix-nav .cart-icon,
.nav.fix-nav .hamburger{
    color: #fff;

}
.navigation{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo h1{
    font-size: 2.5rem;
}
.top-nav{
    display: none;
}
.nav-list{
    display: flex;
    align-items: center;
}
.nav-item:not(:last-child){
    margin-right: .5rem;
}
.nav-link:link,
.nav-link:visited{
    padding: 0.8rem 1rem;
    transition: all 300ms ease-in-out;
}
.nav-link.icon{
    font-size: 3rem;
}
.hamburger{
    display: none;
}
.cart-icon{
    display: none;
}

@media only screen and (max-width: 768px){
    // App.vue #app //
    #app.show::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 4;
    }
    // App.vue #app //
    .nav.show{
        background-color: rgba(0, 0, 0, 0.8);
    }
    .menu{
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        max-width: 40rem;
        height: 100%;
        background-color: #fff;
        transition: all 500ms ease-in-out;
        z-index: 100;
    }
    .menu.show{
        left: 0;
    }
    .top-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #243a6f;
        padding: 1.6rem 1.6rem;
    }
    .top-nav .logo{
        color: #fff;
    }
    .top-nav .close{
        padding-top: 0.5rem;
        cursor: pointer;
    }
    .cart-icon{
        padding-top: 0.5rem;
        display: block;
        cursor: pointer;
    }
    .hamburger{
        display: block;
        padding-top: 0.5rem;
        cursor: pointer;
    }
    .nav-list{
        flex-direction: column;
        align-items: start;
        padding: 1rem 1.6rem;
    }
    .nav-link:link,
    .nav-link:visited{
        display: block;
        font-size: 1.7rem;
        padding: 1rem 0
    }
    .nav.fix-nav .nav-link{
        color: #243a6f;
    }
    .nav-link.icon{
        display: none;
    }
}
</style>