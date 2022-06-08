import './Home.css'
import DarkMode from '../DarkMode/DarkMode'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import AddPost from './AddPost/AddPost'

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

        <div className="friends-div">
            Friends
        </div>

        <div className="content-div">
            Content
        </div>

        <AddPost />

    </>
  )
}

export default Home