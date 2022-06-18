import { useEffect, useState } from 'react';

import FirstPage from "./components/FirstPage/FirstPage";
import DarkMode from './components/DarkMode/DarkMode';
import Home from './components/Home/Home';
import Post from './components/Home/Post/Post';
import avatar from './images/logo.png'
import SignUpForm from './components/SignUpForm/SignUpForm';

/* Firebase SDK (Software Development Kit) */
import firebase from 'firebase/compat/app'

/* Firestore for Database */
import 'firebase/compat/firestore'

/* Auth for User Authentication */
import 'firebase/compat/auth'

/* Hooks to work with Firebase in React */
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { arrayRemove, arrayUnion } from 'firebase/firestore';

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

  /* Get users collection */
  const queryUsers = firebase.firestore().collection('users')
  const [users] = useCollectionData(queryUsers, {idField: 'id'})

  /* See if signed in user is a new user */
  const [newUser, setNewUser] = useState(false)
  
  const checkUser = (userId) => {
    const arrayUsers = []
    users && users.map((user) => {
      arrayUsers.push(user.userId)
    })
    setNewUser(!arrayUsers.includes(userId))
    setNewUser(true)
  }

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

  /* Sign Up Button */
  function SignUp() {
    const SignInWithGoogle = async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
    }
  
    return (
      <div onClick={SignInWithGoogle} className='link create'>Create new account</div>
    )
  }

  /* Event listener when user is logged in with Google */
  useEffect(() => {
    user !== null && checkUser(user.uid)
  }, [user, SignIn, SignUp, SignOut])

  /* Sign Out Button */
  function SignOut() {
    return ( auth.currentUser && 
      <div onClick={() => auth.signOut()} className='item'>
        Sign Out
      </div>
    )
  }

  /* firebase --> posts */
  function PostsContent() {
    /* Get Collection from firestore */
    const postsRef = firestore.collection('posts')
    
    /* Query for ordered posts */
    const queryPosts = postsRef.orderBy('createdAt', 'desc')

    /* Use hook to listen to changes at anytime */
    /* No documentation on how to get the firestore document id while mapping on useCollectionData hook on version 5, the idField was a version 4 feature*/
    const [posts] = useCollectionData( queryPosts, {idField: 'id'})
    
    /* Updates likedBy database --> firestore */
    const changeLike = (userId, like, postId) => {
      postsRef.doc(postId).update({
        likedBy: !like ? arrayUnion(userId) : arrayRemove(userId)
      })
    }

    /* Updates comments database --> firestore */
    const uploadComment = (userId, comment, postId) => {
      const newComment = {
        commentText: comment,
        userId: userId
      }
      postsRef.doc(postId).update({
        comments: arrayUnion(newComment)
      })
    }
    
    return (
      <div className='content-div'>
        {posts && posts.map((post) => {
          return ( <Post 
            key={post.postId} 
            post={post} 
            profileImg={
              post.userId === user.uid 
                /* Get bigger img */
                ? user.photoURL.toString().replace("s96-c","s300-c") 
                : avatar/* remove this is misleading */
            }
            userId={user.uid}
            changeLike={changeLike}
            postId={post.postId}
            currentUserImg={user.photoURL.toString().replace("s96-c","s300-c")}
            uploadComment={uploadComment}
            users={users}
          />)
        })}
      </div>
    )
  }

  return (
    <>
      <DarkMode darkMode={darkMode} onToggle={onDarkModeToggle} user={user} newUser={newUser}/>

      {user
        ? newUser 
          ? <SignUpForm />
          : <Home SignOut={SignOut} PostsContent={PostsContent} user={user}/>
        : <FirstPage SignIn={SignIn} SignUp={SignUp}/>
      }
    </>
  );
}

export default App;
