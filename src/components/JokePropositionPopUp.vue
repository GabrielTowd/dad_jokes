<template>
  <div class='popup-bg' @click='close'>
    <div class='popup' @click.stop>
      <h2>Proposer une blague</h2>
      <hr>
      <input type='text' placeholder='Entrer votre blague ici (obligatoire)' v-model="joke">
      <input class='answer-input' type='text' placeholder='Entre votre réponse ici si besoin' v-model="answer">
      <div class='btn' @click='submitJoke'>Envoyer</div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase.js'

export default {
  data () {
    return {
      joke: '',
      answer: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    submitJoke () {
      if (this.joke.length !== 0) {
        var rootRef = firebase.database().ref()
        var jokesRef = rootRef.child('submission')
        var newJokeRef = jokesRef.push()
        newJokeRef.set({
          answer: this.answer,
          score: 60,
          value: this.joke
        })
        this.$emit('close')
        this.joke = ''
        this.answer = ''
      }
    }
  }
}
</script>

<style scoped>
  .popup-bg{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 9999;
    display: flex;
  }

  .popup{
    margin: auto;
    width: 500px;
    background: white;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box;
  }

  h2{
    text-align: center;
    font-weight: 600;
  }

  hr{
    margin: 30px 0 20px 0;
  }

  input{
    width: 100%;
    padding: 15px 5px;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid lightgrey;
    font-size: 18px;
  }

  .answer-input{
    margin-top: 20px;
  }

  .btn{
    margin: 25px auto 0 auto;
    width: 180px;
    box-sizing: border-box;
    text-align: center;
    padding: 10px;
    color: white;
    border-radius: 10px;
    height: max-content;
    user-select: none;
    cursor: pointer;
    background-color: #27AE60;
    box-shadow: 0 5px 0 0 rgba(28, 144, 76, 100);
  }

  .btn:active{
    margin-top: 30px;
    margin-bottom: -5px;
    box-shadow: 0 0px 0 0 rgba(0, 0, 0, 0);
    transition: all ease .1s;
  }
</style>
