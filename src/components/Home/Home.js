import './Home.css'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import AddPost from './AddPost/AddPost'
import Friends from './Friends/Friends'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'

const Home = ({ 
  allUsers, SignOut, PostsContent, user, deleteUser, uploadPost, friends, getUserImg, getUserName, getUserUsername, getUserStatus, changeFriend, setDeletingPost
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
            allUsers={allUsers} 
            getUserImg={getUserImg}
            getUserName={getUserName}
            getUserUsername={getUserUsername}
            setDeletingPost={setDeletingPost}
          />

          {/* To remove background content when scrolling */}
          <div className="invisible-div"></div>

          {/* For mobile */}
          <div className="top-div">
              Top Div
          </div>

          <Friends 
            friends={friends} 
            setClickProfile={setClickProfile} 
            getUserImg={getUserImg}
            setDeletingPost={setDeletingPost}
          />

          <PostsContent 
            idUpdatePosts={clickProfile}
            clickProfile={clickProfile}
            setClickProfile={setClickProfile}
          />

          <AddPost 
            uploadPost={uploadPost}
            setDeletingPost={setDeletingPost}
          />

          <Profile 
            SignOut={SignOut} 
            user={user} 
            name={getUserName(clickProfile)} 
            username={getUserUsername(clickProfile)} 
            status={getUserStatus(clickProfile)}
            image={getUserImg(clickProfile)} 
            deleteUser={deleteUser}
            clickProfile={clickProfile}
            setClickProfile={setClickProfile}
            changeFriend={changeFriend}
            friends={friends}
            setDeletingPost={setDeletingPost}
          />
        </>}

    </>
  )
}

export default Home