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

        <section class="section discount">
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
                    <!-- <img src="../assets/reebok.png" alt=""> -->
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