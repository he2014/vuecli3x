<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <img alt="dd" src="/image/logo.png"> -->
    <!-- <AsyncComponent msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',

    components: {}
  }
</script>

<style>
  #app {
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>