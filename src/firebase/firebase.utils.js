import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkrn9obvLL1bPAHwc8187w5VwqYggDKJ8",
    authDomain: "crwn-db-d6931.firebaseapp.com",
    databaseURL: "https://crwn-db-d6931.firebaseio.com",
    projectId: "crwn-db-d6931",
    storageBucket: "crwn-db-d6931.appspot.com",
    messagingSenderId: "671667034780",
    appId: "1:671667034780:web:fc74a745492ab44b626b59",
    measurementId: "G-HX581XKERL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firstore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_accout' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;