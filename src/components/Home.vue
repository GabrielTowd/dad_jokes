<template>
  <div class='home-content'>
    <h1>Jokes de Papa</h1>
    <div class='content'>
      <img src='../assets/arrow.svg' alt='before arrow' class='before' v-on:click='count > 0 ? count -= 1: null'>
      <JokeComponent
        v-if='jokes.length > 0'
        :joke='jokes[count]'
      />
      <img src='../assets/arrow.svg' alt='next arrow' class='next' v-on:click='count+1 < jokes.length ? count += 1: null'/>
    </div>
    <div class='btns'>
      <div class='btn'>
        -1
      </div>
      <div class='btn'>
        +1
      </div>
    </div>
  </div>
</template>

<script>
import JokeComponent from './JokeComponent.vue'
import firebase from '../firebase.js'

export default {
  components: {
    JokeComponent
  },
  data () {
    return {
      count: 0,
      jokes: []
    }
  },
  created () {
    var vm = this
    var loadedJokes = firebase.database().ref('posts')
    loadedJokes.on('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val()
        vm.jokes.push(childData)
      })
    })
  }
}
</script>

<style scoped>
  .home-content{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h1{
    text-align: center;
    font-size: 35px;
    font-family: 'Kadisoka Script';
    color: #CF5858;
  }

  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45vh;
  }

  .before, .next{
    width: 50px;
    margin: 0 50px;
  }

  .before:active, .next:active{
    margin: 0 55px;
    width: 40px;
  }

  .before{
    transform: rotate(180deg);
  }

  .btns{
    display: flex;
    justify-content: center;
    height: 80px;
  }

  .btn{
    margin: 0 10px;
    width: 180px;
    box-sizing: border-box;
    text-align: center;
    padding: 15px;
    background: blue;
    color: white;
    border-radius: 10px;
    height: max-content;
    user-select: none;
    cursor: pointer;
  }

  .btn:first-child{
    background-color: #FF5858;
    box-shadow: 0 5px 0 0 rgb(239, 63, 63, 100);
  }

  .btn:last-child{
    background-color: #27AE60;
    box-shadow: 0 5px 0 0 rgba(28, 144, 76, 100);
  }

  .btn:active{
    margin-top: 5px;
    box-shadow: 0 0px 0 0 rgba(0, 0, 0, 0);
    transition: all ease .1s;
  }
</style>
