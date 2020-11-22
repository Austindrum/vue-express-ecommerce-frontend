<template>
    <div>
        <section class="section advert">
            <div class="advert-center container">
                <div class="advert-box">
                    <div class="dotted">
                        <div class="content">
                            <h2>
                                Girls<br/>
                                Clothing
                            </h2>
                            <h4>Worlds Best Brands</h4>
                        </div>
                    </div>
                    <img src="../assets/advert1.png" alt="">
                </div>
                <div class="advert-box">
                    <div class="dotted">
                        <div class="content">
                            <h2>
                                Girls<br/>
                                Clothing
                            </h2>
                            <h4>Worlds Best Brands</h4>
                        </div>
                    </div>
                    <img src="../assets/advert2.png" alt="">
                </div>
                <div class="advert-box">
                    <div class="dotted">
                        <div class="content">
                            <h2>
                                Girls<br/>
                                Clothing
                            </h2>
                            <h4>Worlds Best Brands</h4>
                        </div>
                    </div>
                    <img src="../assets/advert3.png" alt="">
                </div>
            </div>
        </section>
        <section class="section featured">
            <div class="title">
                <h1>Featured Products</h1>
                <div class="product-center container">
                <!-- Products Card Start-->
                    <ProductCard 
                        v-for="product in products" 
                        :key="product.id"
                        :initialProduct="product"
                    />
                    <!-- @addToCart="handleAddToCart" -->
                <!-- Products Card End-->
                </div>
            </div>
        </section>
        <section class="section latest">
            <div class="title">
                <h1>Latest Products</h1>
                <div class="product-center container">
                <!-- Products Card Start-->
                    <ProductCard 
                        v-for="product in products" 
                        :key="product.id"
                        :initialProduct="product"
                    />
                    <!-- @addToCart="handleAddToCart" -->
                <!-- Products Card End-->
                </div>
            </div>
        </section>
        <section class="section">
            <div class="product-banner">
                <div class="left">
                    <img src="../assets/discount.jpg" alt="">
                </div>
                <div class="right">
                    <div class="content">
                        <h2><span class="discount">70%</span> SALE OFF</h2>
                        <h1>
                            <span>Collect Your</span>
                            <span>Kids Collection</span>
                        </h1>
                        <a href="#" class="btn">Show More</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="testmonial-center container">
                <div class="testmonial">
                    <span>&ldquo;</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate quae porro molestiae recusandae nam!
                    </p>
                    <div class="rating">
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                    </div>
                    <div class="img-cover">
                        <img src="../assets/profile2.jpg" alt="">
                    </div>
                    <h4>Linda Wang</h4>
                </div>
                <div class="testmonial">
                    <span>&ldquo;</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate quae porro molestiae recusandae nam!
                    </p>
                    <div class="rating">
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                    </div>
                    <div class="img-cover">
                        <img src="../assets/profile1.jpg" alt="">
                    </div>
                    <h4>Will Smith</h4>
                </div>
                <div class="testmonial">
                    <span>&ldquo;</span>
                    <p>
                        Lorem ipsum dg elit. Deleniti voluptate quae porro molestiae recusandae nam!
                    </p>
                    <div class="rating">
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                        <box-icon name='star' ></box-icon>
                    </div>
                    <div class="img-cover">
                        <img src="../assets/profile3.jpg" alt="">
                    </div>
                    <h4>Amanda Collin</h4>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="brands-center container">
                <div class="brand">
                    <img src="../assets/nike.png" alt="">
                </div>
                <div class="brand">
                    <img src="../assets/puma.png" alt="">
                </div>
                <div class="brand">
                    <img src="../assets/underarmour.png" alt="">
                </div>
                <div class="brand">
                    <img src="../assets/converse.png" alt="">
                </div>
                <div class="brand">
                    <img src="../assets/adidas.png" alt="">
                </div>
                <div class="brand">
                    <img src="../assets/reebok.png" alt="">
                </div>
            </div>
        </section>
        <footer id="footer" class="section footer">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-center">
                    <h3>EXTRAS</h3>
                    <a href="#">Brands</a>
                    <a href="#">Gift Certificates</a>
                    <a href="#">Affiliate</a>
                    <a href="#">Specials</a>
                    <a href="#">Site Map</a>
                    </div>
                    <div class="footer-center">
                    <h3>INFORMATION</h3>
                    <a href="#">About Us</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Site Map</a>
                    </div>
                    <div class="footer-center">
                    <h3>MY ACCOUNT</h3>
                    <a href="#">My Account</a>
                    <a href="#">Order History</a>
                    <a href="#">Wish List</a>
                    <a href="#">Newsletter</a>
                    <a href="#">Returns</a>
                    </div>
                    <div class="footer-center">
                    <h3>CONTACT US</h3>
                    <div>
                        <span>
                        <i class="fas fa-map-marker-alt"></i>
                        </span>
                        42 Dream House, Dreammy street, 7131 Dreamville, USA
                    </div>
                    <div>
                        <span>
                        <i class="far fa-envelope"></i>
                        </span>
                        company@gmail.com
                    </div>
                    <div>
                        <span>
                        <i class="fas fa-phone"></i>
                        </span>
                        456-456-4512
                    </div>
                    <div>
                        <span>
                        <i class="far fa-paper-plane"></i>
                        </span>
                        Dream City, USA
                    </div>
                    </div>
                </div>
            </div>
        </footer>
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

<style lang="scss" scoped>
.section{
    padding: 10rem 0 5rem 0;
}
.advert-center{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
}
.advert-box{
    position: relative;
    color: #fff;
    height: 27rem;
    border-radius: 1.6rem;
    padding: 1.6rem;
    overflow: hidden;
    z-index: 1;
}
.advert-box img{
    position: absolute;
    bottom: 0;
    left: -20%;
    height: 100%;
    width: 35rem;
    z-index: -1;
}
.advert-box:nth-child(1){
    background-color: #f5c5d1;
}
.advert-box:nth-child(2){
    background-color: #a1d1df;
}
.advert-box:nth-child(3){
    background-color: #e5bc00;
}
.advert-box .dotted{
    position: relative;
    height: 100%;
    border: 2px dashed #f1f1f1;
    border-radius: 1rem;
}
.advert-box .content{
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(0, -50%);
}
.advert-box .content h2,
.advert-box .content h4{
    text-shadow: 5px 6px 0px rgba(37,59,112,0.1);
}
.advert-box .content h2{
    line-height: 1.2;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.advert-box .content h4{
    font-size: 1.5rem;
    text-transform: capitalize;
}

.title{
    margin: 4rem 0 7rem 0;
    text-align: center;
}
.title h1{
    font-size: 3rem;
    display: inline-block;
    position: relative;
    z-index: 0;
}
.title h1::after{
    content: "";
    position: absolute;
    left: 50%;
    bottom: -20%;
    transform: translate(-50%, -50%);
    background-color: #f60091;
    width: 50%;
    height: 0.4rem;
    z-index: 1;
}
.product-center{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 7rem 3rem;
    padding-top: 10rem;
}
.product-banner{
    display: grid;
    grid-template-columns: 1fr 1fr;
    // height: 50rem;
    background-color: #243a6f;
}
.product-banner .left img{
    object-fit: cover;
    // height: 100%;
}
.product-banner .right{
    align-self: center;
    text-align: center;
    padding: 1.6rem;
}
.product-banner .content h2{
    color: #fbb419;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.product-banner .content .discount{
    color: #b888ff;
}
.product-banner .content h1 span{
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
    display: block;
    line-height: 1;
}
@media only screen and (max-width: 996px){
    .product-banner .content h1 span{
        font-size: 4rem;
    }
}
@media only screen and (max-width: 768px){
    .product-banner{
        grid-template-columns: 1fr;
    }
    .product-banner .left{
        display: none;
    }
    .product-banner .content h1 span{
        font-size: 3rem;
    }
    .product-banner .content h2{
        font-size: 2rem;
    }
    .product-banner .content a{
        padding: 1rem 3rem;
    }
}
.testmonial-center{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 6rem;
}
.testmonial{
    position: relative;
    padding: 5rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.1);
    transition: all 300ms ease-in-out;
    text-align: center;
    border-radius: 0.5rem;
}
.testmonial:hover{
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.1);
    transform: translateY(-1rem);
}
.testmonial span{
    position: absolute;
    top: 2%;
    left: 50%;
    font-size: 12rem;
    transform: translate(-50%, 0);
    line-height: 1;
    font-family: sans-serif;;
}
.testmonial p{
    margin: 2rem 0 1rem 0;
}
.testmonial .img-cover{
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    margin: 10px auto;
}
.testmonial .img-cover img{
    height: 100%;
    object-fit: cover;
}
.testmonial h4{
    font-size: 2rem;
}
.brands-center{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 3rem
}
.brand{
    height: 8rem;
    width: 8rem;
    margin: 0 auto;
}
.brand img{
    object-fit: contain;
}
@media only screen and (max-width: 768px){
    .brands-center{
        grid-template-columns: repeat(3, 1fr);
    }
}
.footer{
    background-color: #222;
    padding: 6rem 1rem;
    line-height: 3rem;
}
.footer-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: #fff;
}
.footer-center{
    margin-right: 1rem;
}
.footer-center a:link,
.footer-center a:visited{
    display: block;
    color: #f1f1f1;
    font-size: 1.4rem;
    transition: 0.6s;
}
.footer-center a:hover{
    color: #f60091;
}
.footer-center div{
    color: #f1f1f1;
    font-size: 1.4rem;
}
.footer-center h3{
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
}
@media only screen and (max-width: 996px){
    .footer-container{
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
    }
}
@media only screen and (max-width: 768px){
    .footer-container{
        grid-template-columns: 1fr;
    }
}
</style>