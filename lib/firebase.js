import firebase from 'firebase'

let db = {}

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  })
  db = firebaseApp.firestore()
}

export { db }
