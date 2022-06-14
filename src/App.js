import { useState } from 'react';

import FirstPage from "./components/FirstPage/FirstPage";
import DarkMode from './components/DarkMode/DarkMode';
import Home from './components/Home/Home';

/* Firebase SDK (Software Development Kit) */
import firebase from 'firebase/compat/app'

/* Firestore for Database */
import 'firebase/compat/firestore'

/* Auth for User Authentication */
import 'firebase/compat/auth'

/* Hooks to work with Firebase in React */
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

/* Call to initialize the project */
firebase.initializeApp({
  /* Configuration of the project */
  apiKey: "AIzaSyAMy_vWqWcGAY6ujJIqNaZuTv29loeBUrc",
  authDomain: "comulle-social-media.firebaseapp.com",
  projectId: "comulle-social-media",
  storageBucket: "comulle-social-media.appspot.com",
  messagingSenderId: "728473138599",
  appId: "1:728473138599:web:01a82350dc1992f13c3282",
  measurementId: "G-BDY0S1R4X1"
})

/* Global variables */
const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {

  // Dark Mode Feauture
  const [darkMode, setDarkMode] = useState(false)

  const onDarkModeToggle = () => {
    // Fixing transition animation (background, background-color)
    document.querySelector('body').style = 'transition-property: color background-color'
    document.querySelector('body').style = 'transition-timing-function: ease'
    document.querySelector('body').style = 'transition-duration: 1s'

    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', darkMode ? 'default' : 'dark')
  }

  /* Know if a user is signed in 
  If signed in: user is an object
  If signed out: user is null
  */
  const [user] = useAuthState(auth)

  /* Sign In Button */
  function SignIn() {
    const SignInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
    } 
  
    return (
      <div onClick={SignInWithGoogle} className='link login'>Log in</div>
    )
  }

  /* Sign Out Button */
  function SignOut() {
    return ( auth.currentUser && 
      <div onClick={() => auth.signOut()} className='item'>
        Sign Out
      </div>
    )
  }

  return (
    <>
      <DarkMode darkMode={darkMode} onToggle={onDarkModeToggle} user={user}/>

      {user 
      ? <Home SignOut={SignOut}/>
      : <FirstPage SignIn={SignIn}/>
      }
    </>
  );
}

export default App;
