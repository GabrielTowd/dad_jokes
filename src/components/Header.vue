<template>
  <div class="header-content">
    <JokeProposition
      v-show='isShow'
      @close='toggleShow'
    />
    <div class='header'>
      <h1><router-link to='/'>Jokes de Papa</router-link></h1>
      <div>
        <!--<p><router-link to='/submission'>Voter</router-link></p>-->
        <div class='submission' v-on:click='toggleShow'>Proposer une blague</div>
      </div>
    </div>
  </div>
</template>

<script>
import JokeProposition from './JokePropositionPopUp.vue'

export default {
  components: {
    JokeProposition
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggleShow () {
      if (this.isShow === false) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: 'Kadisoka';
    src: url('../assets/fonts/Kadisoka_Script.ttf');
  }

  .header-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10vh 0;
    box-sizing: border-box;
  }

  .header{
    display: flex;
    justify-content: space-between;
    padding: 0 5vw;
    flex-wrap: wrap;
  }

  .header>div{
    display: flex;
    align-items: center;
  }

  .header>div p a{
    text-decoration: none;
    font-weight: 600;
    margin-right: 30px;
    color: black;
  }

  h1 a{
    text-align: center;
    font-size: 35px;
    font-family: 'Kadisoka', sans-serif;
    color: #CF5858;
    text-decoration: none;
  }

  .submission{
    height: max-content;
    padding: 10px 15px;
    border-radius: 10px;
    border: 2px solid #CF5858;
    color: #CF5858;
    font-weight: 600;
    cursor: pointer;
  }

  @media screen and (max-width: 768px){
    .header-content{
      padding: 5vh 0;
    }

    .header{
      justify-content: center;
    }
  }
</style>
