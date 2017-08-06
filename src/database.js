import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAEallhRH7g4SvviMZOUZ606iXjRSrimoU',
  authDomain: 'pwadojo-c881c.firebaseapp.com',
  databaseURL: 'https://pwadojo-c881c.firebaseio.com',
  projectId: 'pwadojo-c881c',
  storageBucket: 'pwadojo-c881c.appspot.com',
  messagingSenderId: '1056513791052'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

export {
    db
}
