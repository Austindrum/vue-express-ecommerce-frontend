<template>
    <main>
        <header id="home" class="header">
            <Navbar/>
            <Hero/>
        </header>
        <!-- Section Advert Start -->
        <section class="section advert">
            <div class="advert-center container">
                <div class="advert-box">
                    <div class="dotted">
                        <div class="content">
                            <h2>
                                Girl's<br/>
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
                                Man's<br/>
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
                                Accessories
                            </h2>
                            <h4>Worlds Best Brands</h4>
                        </div>
                    </div>
                    <img src="../assets/advert3.png" alt="">
                </div>
            </div>
        </section>
        <!-- Section Advert End -->

        <!-- Section Feature Start -->
        <section class="section featured">
            <div class="title">
                <h1>Featured Products</h1>
            </div>
            <div class="product-center container">
                <ProductCard 
                    v-for="product in featureProducts" 
                    :key="product.id"
                    :initialProduct="product"
                />
            </div>
        </section>
        <!-- Section Feature End -->

        <!-- Section Latest Start -->
        <section class="section latest">
            <div class="title">
                <h1>Latest Products</h1>
            </div>
            <div class="product-center container">
                <ProductCard 
                    v-for="product in latestProducts" 
                    :key="product.id"
                    :initialProduct="product"
                />
            </div>
        </section>
        <!-- Section latest End -->

        <!-- Section Discount Start -->
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
        <!-- Section Discount End -->

        <!-- Section Testmonial Start -->
        <section class="section testmonial">
            <div class="testmonial-center container">
                <div class="testmonial-content">
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
                <div class="testmonial-content">
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
                <div class="testmonial-content">
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
        <!-- Section Testmonial End -->

        <!-- Section Brand Start -->
        <section class="section brand">
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
                    <img src="../assets/newBalance.png" alt="">
                </div>
            </div>
        </section>
        <!-- Section Brand End -->
        
        <Footer/>
    </main>
</template>

<script>
// import gsap from 'gsap';
import Navbar from '../components/NavBar';
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

import productAPI from '../apis/products';

export default {
    data() {
        return {
            featureProducts: null,
            latestProducts: null
        }
    },
    components: {
        Navbar,
        Hero,
        ProductCard,
        Footer
    },
    methods: {
        async fetchProducts(){
            try {
                const vm = this;
                const products = await productAPI.getProducts();
                vm.featureProducts = products.data.filter(product=>{
                    if(product.id < 5) return product;
                }) 
                vm.latestProducts = products.data.filter(product=>{
                    if(product.id < 9) return product;
                })
            } catch (err) {
                console.log(err);
            }
        },
    },
    created() {
        try {
            this.fetchProducts();   
        } catch (err) {
            console.log(err);
        }
    },
}
</script>

<style lang="scss">
/* Header */
.header{
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #d1e2e9;
  overflow: hidden;
}
@media only screen and (max-width: 996px){
  .header{
    min-height: 70vh;
  }
}
@media only screen and (max-width: 567px){
  .header{
    min-height: 100vh;
  }
}
/* All Section */
.section{
    padding: 10rem 0 5rem 0;
}
/* Advert */
.advert-center{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
    .advert-box{
        position: relative;
        color: #fff;
        height: 27rem;
        border-radius: 1.6rem;
        padding: 1.6rem;
        overflow: hidden;
        z-index: 1;
        .dotted{
            position: relative;
            height: 100%;
            border: 2px dashed #f1f1f1;
            border-radius: 1rem;
            .content{
                position: absolute;
                top: 50%;
                right: 5%;
                transform: translate(0, -50%);
                h2, h4{
                    text-shadow: 5px 6px 0px rgba(37,59,112,0.1);
                }
                h2{
                    line-height: 1.2;
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                h4{
                    font-size: 1.5rem;
                    text-transform: capitalize;
                }
            }
        }
        img{
            position: absolute;
            bottom: 0;
            left: -20%;
            // height: 100%;
            // width: 35rem;
            z-index: -1;
        }
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
}
/* Feature & Latest */
.featured, .latest{
    .title{
        margin: 4rem 0 7rem 0;
        text-align: center;
        h1{
            font-size: 3rem;
            display: inline-block;
            position: relative;
            z-index: 0;
        }
        h1::after{
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
    }
    .product-center{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        gap: 7rem 3rem;
    }
}
/* Discount */
.product-banner{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #243a6f;
    height: 50rem;
    .left img{
        object-fit: cover;
        height: 50rem;
    }
    .right{
        align-self: center;
        text-align: center;
        padding: 1.6rem;
    }
    .content {
        h2{
            color: #fbb419;
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        .discount{
            color: #b888ff;
        }
        h1 span{
            color: #fff;
            font-size: 5rem;
            font-weight: 700;
            display: block;
            line-height: 1.3;
        }
        @media only screen and (max-width: 996px){
            h1 span{
                font-size: 4rem;
            }
        }
    }
}
@media only screen and (max-width: 768px){
    .product-banner{
        grid-template-columns: 1fr;
        .left{
            display: none;
        }
        .right{
            .content{ 
                h1 span{
                    font-size: 3rem;
                }
                h2{
                    font-size: 2rem;
                }
                a{
                    padding: 1rem 3rem;
                }
            }
        }
    }  
}
/* Testmonial */
.testmonial{
    .testmonial-center{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        gap: 6rem;
        .testmonial-content{
            position: relative;
            padding: 5rem;
            background-color: #fff;
            box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.1);
            transition: all 300ms ease-in-out;
            text-align: center;
            border-radius: 0.5rem;
            span{
                position: absolute;
                top: 2%;
                left: 50%;
                font-size: 12rem;
                transform: translate(-50%, 0);
                line-height: 1;
                font-family: sans-serif;;
            }
            p{
                margin: 2rem 0 1rem 0;
            }
            .img-cover{
                border-radius: 50%;
                width: 10rem;
                height: 10rem;
                overflow: hidden;
                margin: 10px auto;
                img{
                    height: 100%;
                    object-fit: cover;
                }
            }
            h4{
                font-size: 2rem;
            }
        }
        .testmonial-content:hover{
            box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.1);
            transform: translateY(-1rem);
        }
    }
}
/* Brand */
.brands-center{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 3rem;
    .brand{
        height: 12rem;
        width: 12rem;
        margin: 0 auto;
        .brand img{
            object-fit: contain;
        }
    }
}
@media only screen and (max-width: 768px){
    .brands-center{
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>