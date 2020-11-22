<template>
    <div>
        <img src="../assets/banner.png" class="hero-img" alt="">
        <div class="hero-content">
            <h2><span class="discount">70%</span> SALE OF</h2>
            <h1>
                <span>Summer Vibes</span>
                <span>mode on</span>
            </h1>
            <a href="" class="btn">Shop Now</a>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
export default {
    name: "Hero",
    mounted() {
        gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.2, y: -10 });
        gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 1.5, y: -50 });
        gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 1.8, y: -45 });
        gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 2.1, y: 50 });
    },
}
</script>

<style lang="scss">
.hero-img{
    position: absolute;
    right: -10%;
    bottom: -10%;
    height: 70rem;
    object-fit: contain;
}
.hero-content{
    position: absolute;
    top: 50%;
    transform: translate(25%, -50%);
}
.hero-content h2{
    color: #b888ff;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.hero-content .discount{
    color: #fbb419;
}
.hero-content h1 span{
    color: #253b70;
    font-size: 6rem;
    font-weight: 700;
    display: block;
    line-height: 1;
    text-shadow: 3px 3px 0 #f1f1f1, 4px 4px 0 #f1f1f1;
}
.btn{
    display: inline-block;
    background-color: #fc7c7c;
    padding: 1.2rem 4rem;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 3rem;
}
@media only screen and (max-width: 1200px){
    .hero-img{
        right: -20%;
    }
    .hero-content{
        transform: translate(20%, -50%);
    }
    .hero-content h2{
        font-size: 2rem;
    }
    .hero-content h1 span{
        font-size: 5rem;
    }
}
@media only screen and (max-width: 996px){
    .hero-img{
        height: 40rem;
        right: -12%;
    }
}
@media only screen and (max-width: 567px){
    .hero-img{
        bottom: -15%;
        right: 0;
    }
    .hero-content{
        transform: translate(15%, -50%);
    }
    .hero-content h2{
        font-size: 1.8rem;
    }
    .hero-content h1 span{
        font-size: 3.5rem;
    }
    a{
        padding: 1rem 3rem;
    }
}
</style>