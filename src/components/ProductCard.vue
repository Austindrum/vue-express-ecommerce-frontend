<template>
    <div class="product">
        <div class="product-header">
            <img :src="product.image" alt="product">
            <ul class="icons">
                <span><box-icon name='heart'></box-icon></span>
                <span v-if="!isInCart" @click.prevent="addToCart(product, 1)">
                    <box-icon name='shopping-bag'></box-icon>
                </span>
                <div v-else>
                    <box-icon name='shopping-bag' type='solid' ></box-icon>
                </div>
                <span><box-icon name='search' ></box-icon></span>
            </ul>
        </div>
        <div class="product-footer">
            <a href="#">
                <h3>{{ product.name }}</h3>
            </a>
            <div class="rating">
                <box-icon name='star' color="#43b3d9"></box-icon>
                <box-icon name='star' ></box-icon>
                <box-icon name='star' ></box-icon>
                <box-icon name='star' ></box-icon>
                <box-icon name='star' ></box-icon>
            </div>
            <h4 class="price">${{ product.price }}</h4>
        </div>
        <!-- <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">${{ product.price }}</p>
            <router-link to="" class="btn btn-success">商品資訊</router-link>
            <button class="btn btn-primary ml-2" @click.prevent="addToCart('+', product, 1)" :disabled="isInCart">
                <span v-if="isInCart">已放入購物車</span>
                <span v-else>放入購物車</span>
            </button>
        </div> -->
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
            product: this.initialProduct,
        }
    },
    computed: {
        isInCart(){
            return this.$store.state.cartItems.map(item=> item.product.id).includes(this.product.id);
        }
    },
    methods: {
        addToCart(product, quantity){
            return this.$store.commit({
                type: "setCartItems",
                product,
                quantity
            });
        }
    },
}
</script>

<style lang="scss">
.product{
    height: 48rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0, 0.8);
    border-radius: 1rem;
    text-align: center;
    transition: all 300ms ease-in-out;
    .product-header{
        position: relative;
        background-color: #f6f2f1;
        height: 35rem;
        transition: all 300ms ease-in-out;
        z-index: 0;
        img{
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            height: 100%;
        }
        .icons{
            position: absolute;
            top: 50%;
            right: 5%;
            transform: translate(0, -50%) scale(0);
            z-index: 2;
            opacity: 0;
            transition: all 500ms ease-in-out;
            span{
                background-color: #fff;
                font-size: 2.5rem;
                display: block;
                border-radius: 50%;
                padding: 1.5rem 1.6rem;
                line-height: 2rem;
                cursor: pointer;
                transition: all 500ms ease-in-out;
            }
            span:not(:last-child){
                margin-bottom: 1rem;
            }
            span:hover{
                background-color: #ff7c9c;
            }
            div{
                background-color:#fff;
                font-size: 2.5rem;
                display: block;
                border-radius: 50%;
                padding: 1.5rem 1.6rem;
                line-height: 2rem;
                margin-bottom: 1rem;
            }
        }
    }
    .product-footer{
        padding: 2rem 1.6rem 1.6rem 1.6rem;
        h3{
            font-size: 2rem;
        }
        .price{
            color: #ff7c9c;
            font-size: 2rem;
        }
    }
}
.product:hover{
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0, 0.25);
}
.product:hover .product-header::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 1rem 1rem 0 0;
    background-color: rgba(0,0,0, 0.5);
    z-index: 1;
    transition: all 500ms ease-in-out;
}
.product:hover .icons{
    opacity: 1;
    transform: translate(0, -50%) scale(1);
}
.product:hover .icons a{
    display: block;
    margin-bottom: 1rem;
}
</style>