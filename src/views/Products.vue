<template>
    <div>
        
    </div>
</template>

<script>
import productAPI from '../apis/products';

export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
        async fetchProducts(){
            try {
                // const vm = this;
                const responce = await productAPI.getProducts();
                console.log(responce);
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