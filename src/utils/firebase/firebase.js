import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8mYMrIgRVT5WYg48spfKqa-Y5onLs33M",
    authDomain: "crwn-clothing-db-2aae0.firebaseapp.com",
    projectId: "crwn-clothing-db-2aae0",
    storageBucket: "crwn-clothing-db-2aae0.appspot.com",
    messagingSenderId: "621442694528",
    appId: "1:621442694528:web:a8517157de3ca55f069565"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);