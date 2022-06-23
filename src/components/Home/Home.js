import './Home.css'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import AddPost from './AddPost/AddPost'
import Friends from './Friends/Friends'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'

const Home = ({ 
  SignOut, PostsContent, user, name, username, status, deleteUser, uploadPost, friends, getUserImg, getUserName, getUserUsername
}) => {
  const [loadingHome, setLoadingHome] = useState(true)

  /* 
  Updates Profile div and PostsContent div when clicking on a profile img, name, or search bar result 
  */
 const [clickProfile, setClickProfile] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      setLoadingHome(false)
    }, 1100);
  }, [])

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [clickProfile])

  return (
    <>
      {loadingHome
        ? <Loading />
        : <>
          <Navbar 
            setClickProfile={setClickProfile} 
            friends={friends} 
            getUserImg={getUserImg}
            getUserName={getUserName}
            getUserUsername={getUserUsername}
          />

          {/* To remove background content when scrolling */}
          <div className="invisible-div"></div>

          {/* For mobile */}
          <div className="top-div">
              Top Div
          </div>

          <Friends friends={friends} setClickProfile={setClickProfile} getUserImg={getUserImg}/>

          <PostsContent 
            idUpdatePosts={clickProfile}
            clickProfile={clickProfile}
            setClickProfile={setClickProfile}
          />

          <AddPost uploadPost={uploadPost}/>

          <Profile 
            SignOut={SignOut} 
            user={user} 
            name={name} 
            username={username} 
            status={status} 
            deleteUser={deleteUser}
            setClickProfile={setClickProfile}
          />
        </>}

    </>
  )
}

export default Home