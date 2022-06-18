import './Home.css'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import AddPost from './AddPost/AddPost'
import Friends from './Friends/Friends'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'

const Home = ({ SignOut, PostsContent, user }) => {
  const [loadingHome, setLoadingHome] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingHome(false)
    }, 1100);
  }, [])

  return (
    <>
      {loadingHome
        ? <Loading />
        : <>
          <Navbar />

          {/* To remove background content when scrolling */}
          <div className="invisible-div"></div>

          {/* For mobile */}
          <div className="top-div">
              Top Div
          </div>

          <Friends />

          <PostsContent />

          <AddPost />

          <Profile SignOut={SignOut} user={user}/>
        </>}

    </>
  )
}

export default Home