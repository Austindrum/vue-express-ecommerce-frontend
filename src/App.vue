<template>
  <div id="app">
    <Navbar/>
    <main class="container mt-5">
      <router-view/>
    </main>
  </div>
</template>
<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
</style>
