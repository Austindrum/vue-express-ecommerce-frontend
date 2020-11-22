<template>
  <div id="app">
    <header id="home" class="header">
      <Navbar/>
      <Hero/>
    </header>
    <main>
      <!-- <Signin/>
      <Signup/> -->
      <router-view/>
    </main>
  </div>
</template>
<script>
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Hero from './components/Hero'
// import Signin from './components/Signin';
// import Signup from './components/Signup';
export default {
  components: {
    Navbar,
    Hero,

    // Signin,
    // Signup,
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html{
  box-sizing: border-box;
  font-size: 62.5%;
}
body{
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: #fff;
  color: #243a6f;
  position: relative;
  z-index: 1;
}
h1,h2,h3,h4{
  font-weight: 500;
}
a{
  color: inherit;
  text-decoration: none;
}
img{
  max-width: 100%;
}
li{
  list-style-type: none;
}
.container{
  max-width: 120rem;
  margin: 0 auto;
}
.container-md{
  max-width: 100rem;
  margin: 0 auto;
}

@media only screen and (max-width: 1200px){
  .container{
    padding: 0 3rem;
  }
  .container-md{
    padding: 0 3rem;
  }
}

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
</style>
