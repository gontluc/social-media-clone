import './Navbar.css'
import { FaHome as HomeIcon } from 'react-icons/fa'
import navLogo from '../../../images/logo.png'
import SearchBar from './SearchBar/SearchBar'

const Navbar = ({ setClickProfile, friends, getUserImg, getUserName, getUserUsername }) => {
  return (
    <div className="navbar">
        <img src={navLogo} alt="logo" id='nav-logo'/>

        <HomeIcon 
          className='home-icon' 
          onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'})
            setClickProfile(undefined)
          }}
        />
        
        <SearchBar 
          setClickProfile={setClickProfile}
          friends={friends} 
          getUserImg={getUserImg}
          getUserName={getUserName}
          getUserUsername={getUserUsername}
        />
    </div>
  )
}

export default Navbar