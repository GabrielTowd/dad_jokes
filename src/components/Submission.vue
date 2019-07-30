<template>
  <div class="submission-page">
    <Header/>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
  .submission-page{
    min-height: 100vh;
    background-image: linear-gradient(0deg, #a1c4fd 0%, #c2e9fb 100%);
  }
</style>
