import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCfEjJpkUdFooIkdqdRj_TZng1imrmymMY",
        authDomain: "my-portfolio-248515.firebaseapp.com",
        databaseURL: "https://my-portfolio-248515.firebaseio.com",
        projectId: "my-portfolio-248515",
        storageBucket: "my-portfolio-248515.appspot.com",
        messagingSenderId: "970529353485",
        appId: "1:970529353485:web:529efcd5de1ede64"
    };
    firebase.initializeApp(config)
   
    
}
const fireDb = firebase.firestore()
const database = firebase.database()
const auth = firebase.auth()
const storageref = firebase.storage().ref()


//const realdb = firebase.database()
export {database,fireDb,auth,storageref}