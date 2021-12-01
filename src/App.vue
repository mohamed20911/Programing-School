<template>
  <div id="app">
    <img src="./assets/logo.png">
    <img src="../images/channels4_profile.jpg">
    <h1>Hello To Programing-School Vue</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Programing-School'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
