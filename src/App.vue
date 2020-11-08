<template>
  <div id="app">
    <Navbar/>
    <main class="container mt-5">
      <Signin/>
      <Signup/>
      <router-view/>
    </main>
  </div>
</template>
<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import Signin from './components/Signin';
import Signup from './components/Signup';
export default {
  components: {
    Navbar,
    Signin,
    Signup,
  }
}
</script>
<style>
</style>
