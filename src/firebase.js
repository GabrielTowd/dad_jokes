const firebase = require('firebase')
// Required for side-effects
var config = {
  apiKey: 'AIzaSyB1XDrqY4M7Rd-ayRTsoDu1sWIG7lDGRsE',
  authDomain: 'dad-jokes-4090.firebaseapp.com',
  databaseURL: 'https://dad-jokes-4090.firebaseio.com',
  storageBucket: 'gs://dad-jokes-4090.appspot.com'
}
export default firebase.initializeApp(config)
