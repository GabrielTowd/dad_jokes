<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, h1, p{
  margin: 0;
}

body{
  font-family: 'Open Sans', sans-serif;
  background-image: linear-gradient(0deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
}
</style>
