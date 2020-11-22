<template>
    <footer class="section footer">
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
                            <box-icon
                            color="white" 
                            name='map'></box-icon>
                        </span>
                        42 Dream House, Dreammy street, 7131 Dreamville, USA
                    </div>
                    <div>
                        <span>
                            <box-icon 
                            color="white"
                            name='envelope' ></box-icon>
                        </span>
                        company@gmail.com
                    </div>
                    <div>
                        <span>
                            <box-icon 
                            color="white"
                            type='solid' 
                            name='phone'></box-icon>
                        </span>
                        456-456-4512
                    </div>
                    <div>
                        <span>
                            <box-icon
                            color="white" 
                            name='paper-plane' 
                            type='solid' ></box-icon>
                        </span>
                        Dream City, USA
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.footer{
    background-color: #222;
    padding: 6rem 1rem;
    line-height: 3rem;
    .footer-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        color: #fff;
        .footer-center{
            margin-right: 1rem;
            h3{
                font-size: 2rem;
                font-weight: 400;
                margin-bottom: 1rem;
            }
            a:link,
            a:visited{
                display: block;
                color: #f1f1f1;
                font-size: 1.4rem;
                transition: 0.6s;
            }
            a:hover{
                color: #f60091;
            }
            div{
                color: #f1f1f1;
                font-size: 1.4rem;
            }
        }
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
}
</style>