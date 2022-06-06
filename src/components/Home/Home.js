import './Home.css'
import DarkMode from '../DarkMode/DarkMode'

const Home = ({ darkMode, onDarkModeToggle }) => {
  return (
    <>
        <div className="navbar">
            Navbar
        </div>

        {/* To remove background content when scrolling */}
        <div className="invisible-div"></div>

        {/* For mobile */}
        <div className="top-div">
            Top Div
        </div>

        <DarkMode darkMode={darkMode} onToggle={onDarkModeToggle}/>

        <div className="profile-div">
            Profile
        </div>

        <div className="friends-div">
            Friends
        </div>

        <div className="content-div">
            Content
        </div>
    </>
  )
}

export default Home