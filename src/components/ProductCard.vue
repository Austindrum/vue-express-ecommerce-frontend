<template>
    <div class="card" style="width: 18rem; margin: 10px">
        <img :src="product.image" alt="product" style="height: 180px">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">${{ product.price }}</p>
            <router-link to="" class="btn btn-success">商品資訊</router-link>
            <button class="btn btn-primary ml-2" @click.prevent="addToCart('+', product, 1)">放入購物車</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        initialProduct: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            product: this.initialProduct
        }
    },
    methods: {
        addToCart(status, product, quantity){
            return this.$store.commit({
                type: "setCartItems",
                status,
                product,
                quantity
            });
        }
    },
}
</script>

<style lang="">
    
</style>