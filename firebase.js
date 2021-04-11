import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDm9H2uc0hkkeyBr55ZepQN562Tdae9gWU",
    authDomain: "whatsapp-clone-25728.firebaseapp.com",
    projectId: "whatsapp-clone-25728",
    storageBucket: "whatsapp-clone-25728.appspot.com",
    messagingSenderId: "365754171881",
    appId: "1:365754171881:web:a826252f05c38286d9cb78"
  };

  const app = !firebase.apps.length 
                ? firebase.initializeApp(firebaseConfig)
                : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }