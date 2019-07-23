<template>
  <div class='home-content'>
    <h1>Jokes de Papa</h1>
    <div class='content'>
      <img src='../assets/arrow.svg' alt='before arrow' class='before' v-on:click='changeJoke'>
      <JokeComponent
        v-if='jokes.length > 0'
        :joke='jokes[count]'
      />
      <img src='../assets/arrow.svg' alt='next arrow' class='next' v-on:click='changeJoke(1)'/>
    </div>
    <div class='btns'>
      <div class='btn' v-on:click='updateScore(jokes[count], -1)'>
        -1
      </div>
      <div class='btn' v-on:click='updateScore(jokes[count], 1)'>
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
    let jokes = []
    var loadedJokes = firebase.database().ref('posts')
    loadedJokes.on('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val()
        childData.key = childSnapshot.ref_.key
        jokes.push(childData)
      })
      jokes.sort(() => Math.random() - 0.5)
    })
    vm.jokes = jokes
  },
  methods: {
    changeJoke: function (direction) {
      const vm = this
      if (direction === 1) {
        if (vm.count + 1 < vm.jokes.length) {
          vm.count += 1
        }
      } else {
        if (vm.count > 0) {
          vm.count -= 1
        }
      }
    },
    updateScore: function (currentJoke, value) {
      const vm = this
      firebase.database().ref('posts/' + currentJoke.key).set({
        answer: currentJoke.answer,
        score: currentJoke.score += value,
        value: currentJoke.value
      }, function (err) {
        if (err) {
          console.log(err)
        } else {
          vm.changeJoke(1)
          console.log('Joke updated successfully')
        }
      })
    }
  }
}
</script>

<style scoped>
  .home-content{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10vh 0;
    box-sizing: border-box;
  }

  h1{
    text-align: center;
    font-size: 35px;
    font-family: 'Kadisoka Script', sans-serif;
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
    margin: 0 5vw;
  }

  .before:active, .next:active{
    opacity: .5;
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

  @media screen and (max-width: 768px){
    .home-content{
      padding: 5vh 0;
    }
  }
</style>
