import './Home.css'
import DarkMode from '../DarkMode/DarkMode'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import AddPost from './AddPost/AddPost'
import Friends from './Friends/Friends'
import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'

const Home = ({ darkMode, onDarkModeToggle }) => {
  const [loadingFirstPage, setLoadingFirstPage] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingFirstPage(false)
    }, 1100);
  }, [])

  return (
    <>
      {loadingFirstPage
        ? <Loading />
        : <>
          <Navbar />

          {/* To remove background content when scrolling */}
          <div className="invisible-div"></div>

          {/* For mobile */}
          <div className="top-div">
              Top Div
          </div>

          <DarkMode darkMode={darkMode} onToggle={onDarkModeToggle}/>

          <Friends />

          <div className="content-div">
              Content
          </div>

          <AddPost />

          <Profile />
        </>}

    </>
  )
}

export default Home