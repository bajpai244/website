import firebase from 'firebase'

let db = {}

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyCzMqIhW0v_lGjuw33MLZxezrrvJPpoQFA',
    authDomain: 'fleeks-ae383.firebaseapp.com',
    projectId: 'fleeks-ae383',
    storageBucket: 'fleeks-ae383.appspot.com',
    messagingSenderId: '645802630463',
    appId: '1:645802630463:web:00b818787152bf0c70878a',
    measurementId: 'G-M4YG9VHRG5',
  })
  db = firebaseApp.firestore()
}

export { db }
