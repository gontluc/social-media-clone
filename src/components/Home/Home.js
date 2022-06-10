import './Home.css'
import DarkMode from '../DarkMode/DarkMode'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import AddPost from './AddPost/AddPost'
import Friends from './Friends/Friends'

const Home = ({ darkMode, onDarkModeToggle }) => {
  return (
    <>
        <Navbar />

        {/* To remove background content when scrolling */}
        <div className="invisible-div"></div>

        {/* For mobile */}
        <div className="top-div">
            Top Div
        </div>

        <DarkMode darkMode={darkMode} onToggle={onDarkModeToggle}/>

        <Profile />

        <Friends />

        <div className="content-div">
            Content
        </div>

        <AddPost />

    </>
  )
}

export default Home