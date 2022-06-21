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

  /* Get Collection from firestore */
  const postsRef = firestore.collection('posts')
    
  /* Query for ordered posts */
  const queryPosts = postsRef.orderBy('createdAt', 'desc')

  /* See if signed in user is a new user */
  const [newUser, setNewUser] = useState(false)
  
  const checkUser = (userId) => {
    const arrayUsers = []
    users && users.map((user) => {
      arrayUsers.push(user.userId)
    })
    setNewUser(!arrayUsers.includes(userId))
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

  /* Sign Out Button */
  const SignOut = () => {
    auth.currentUser && auth.signOut()
  }

  /* Event listener when user is logged in with Google */
  useEffect(() => {
    user !== null && checkUser(user.uid)
  }, [user, SignIn, SignUp, SignOut])

  /* Adds new user to users collection --> firestore */
  const uploadNewUser = (username) => {
    const newUserData = {
      username: '@' + username,
      userId: user.uid,
      photo: user.photoURL.toString().replace("s96-c","s300-c"),
      name: user.displayName,
      friends: [],
      city: '',
      status: 'online',
      createdAt: new Date()
    }

    queryUsers.doc(user.uid).set(newUserData)
  }

  /* Get user.photo */
  const getUserImg = (postUserId = user.uid) => {
    const photo = []
    users.map((userDoc) => {
      userDoc.userId === postUserId && photo.push(userDoc.photo)
    })

    return (photo.length === 1 ? photo[0] : avatar)
  }

  /* Get user.name */
  const getUserName = (postUserId = user.uid) => {
    const name = []
    users.map((userDoc) => {
      userDoc.userId === postUserId && name.push(userDoc.name)
    })

    return (name.length === 1 ? name[0] : 'user_not_available')
  }

  /* Get user.username */
  const getUserUsername = (postUserId = user.uid) => {
    const username = []
    users.map((userDoc) => {
      userDoc.userId === postUserId && username.push(userDoc.username)
    })

    return (username.length === 1 ? username[0] : 'username_not_available')
  }

  /* Get user.status */
  const getUserStatus = (userId = user.uid) => {
    const status = []
    users.map((userDoc) => {
      userDoc.userId === userId && status.push(userDoc.status)
    })

    return (status.length === 1 ? status[0] : 'status_unavailable')
  }

  /* Get user.createdAt */
  const getUserCreatedAt = (userId = user.uid) => {
    const date = []
    users.map((userDoc) => {
      userDoc.userId === userId && date.push(userDoc.createdAt)
    })

    return (date.length === 1 ? date[0] : 'no_date_found')
  }

  /* Get user.friends */
  const getUserFriends = (userId = user.uid) => {
    let friends = []

    const getFriendsArray = (friendsArray) => {
      friends = friendsArray
    }

    users.map((userDoc) => {
      userDoc.userId === userId && getFriendsArray(userDoc.friends)
    })

    return (friends)
  }

  /* Delete user -> Updates username --> username +'DELETED' */
  const deleteUser = () => {
    const created = getUserCreatedAt()

    const updatedData = {
      photo: '',
      userId: user.uid + 'DELETED',
      username: getUserUsername() + 'DELETED',
      status: 'inactive',
      name: user.displayName,
      friends: [],
      city: '',
      createdAt: created,
      deletedAt: new Date()
    }

    queryUsers.doc(user.uid + 'DELETED').set(updatedData)
    queryUsers.doc(user.uid).delete()
  }

  /* Updates posts database --> firestore */
  const uploadPost = (postText) => {
    const timeNow = new Date()

    const newPost = {
      text: postText,
      userId: user.uid,
      createdAt: timeNow,
      likedBy: [],
      comments: [],
      postId: ''
    }

    postsRef.add(newPost).then(postsRef.get().then(querySnapshot => querySnapshot.forEach(post => {
      /* grab id to add postId */
      post.data().createdAt.toDate().toString() === timeNow.toString() & post.data().userId === user.uid
        && postsRef.doc(post.id).update({postId: post.id})
    })))
  }

  /* firebase --> posts */
  function PostsContent({ idUpdatePosts = undefined, clickProfile, setClickProfile }) {

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
          return ( !idUpdatePosts 
            ? <Post 
              key={post.postId} 
              post={post} 
              profileImg={getUserImg(post.userId)}
              userId={user.uid}
              changeLike={changeLike}
              postId={post.postId}
              currentUserImg={user.photoURL.toString().replace("s96-c","s300-c")}
              uploadComment={uploadComment}
              users={users}
              name={getUserName(post.userId)}
              username={getUserUsername(post.userId)}
              postedBy={post.userId}
              clickProfile={clickProfile}
              setClickProfile={setClickProfile}
            />
            : idUpdatePosts === post.userId 
              && <Post 
                key={post.postId} 
                post={post} 
                profileImg={getUserImg(post.userId)}
                userId={user.uid}
                changeLike={changeLike}
                postId={post.postId}
                currentUserImg={user.photoURL.toString().replace("s96-c","s300-c")}
                uploadComment={uploadComment}
                users={users}
                name={getUserName(post.userId)}
                username={getUserUsername(post.userId)}
                postedBy={post.userId}
                clickProfile={clickProfile}
                setClickProfile={setClickProfile}
              />
          )
        })}
      </div>
    )
  }

  return (
    <>
      <DarkMode darkMode={darkMode} onToggle={onDarkModeToggle} user={user} newUser={newUser}/>

      {user 
        ? newUser 
          ? <SignUpForm uploadNewUser={uploadNewUser}/>
          : <Home 
              SignOut={SignOut} 
              PostsContent={PostsContent} 
              user={user} 
              name={users && getUserName()} 
              username={users && getUserUsername()} 
              status={users && getUserStatus()}
              deleteUser={deleteUser}
              uploadPost={uploadPost}
              friends={users && getUserFriends()}
              getUserImg={getUserImg}
          />
        : <FirstPage SignIn={SignIn} SignUp={SignUp}/>
      }
    </>
  );
}

export default App;
