<script>
const firebase = require('firebase')
// Required for side-effects
var config = {
  apiKey: 'AIzaSyB1XDrqY4M7Rd-ayRTsoDu1sWIG7lDGRsE',
  authDomain: 'dad-jokes-4090.firebaseapp.com',
  databaseURL: 'https://dad-jokes-4090.firebaseio.com',
  storageBucket: 'gs://dad-jokes-4090.appspot.com'
}
firebase.initializeApp(config)
var database = firebase.database()
console.log(database)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    helloWorld: function () {
      firebase.database().ref('posts/').push({
        value: 'Test',
        score: 100
      }).then(() => {
        console.log('Post has been sent')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<template>
  <div class="home-content">
    <h1>Jokes de Papa</h1>
    <p>Quel est la diff entre ta mère et un avion de chasse ?</p>
    <div class="btns">
      <div class='btn'>
        A rigolé
      </div>
      <div class='btn'>
        N'a pas ri
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-content{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h1, p{
  text-align: center;
}

.btns{
  display: flex;
  justify-content: center;
}

.btn{
  margin: 0 10px;
  width: 180px;
  box-sizing: border-box;
  text-align: center;
  padding: 15px;
  background: blue;
  color: white;
  border-radius: 6px;
  height: max-content;
}
</style>
