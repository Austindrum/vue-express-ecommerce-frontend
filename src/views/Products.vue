<template>
    <!-- Products Card -->
    <div class="d-flex flex-wrap">
        <ProductCard 
            v-for="product in products" 
            :key="product.id"
            :initialProduct="product"
        />
        <!-- @addToCart="handleAddToCart" -->
    </div>
</template>

<script>
import productAPI from '../apis/products';
import cartAPI from '../apis/carts';

import ProductCard from '../components/ProductCard';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        async fetchProducts(){
            try {
                const vm = this;
                const responce = await productAPI.getProducts();
                vm.products = responce.data;
            } catch (err) {
                console.log(err);
            }
        },
        async handleAddToCart(productId, quantity){
            try {
                const vm = this;
                const { data, statusText } = await cartAPI.addToCart(productId, quantity);
                console.log(vm, data, statusText);
            } catch (err) {
                console.log(err);
            }
        }
    },
    created() {
        this.fetchProducts();        
    },
}
</script>

<style lang="">
    
</style>