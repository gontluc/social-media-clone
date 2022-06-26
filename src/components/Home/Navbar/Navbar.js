import './Navbar.css'
import { FaHome as HomeIcon } from 'react-icons/fa'
import navLogo from '../../../images/logo.png'
import SearchBar from './SearchBar/SearchBar'

const Navbar = ({ 
  setClickProfile, allUsers, getUserImg, getUserName, getUserUsername, setDeletingPost 
}) => {
  return (
    <div className="navbar" onClick={() => setDeletingPost(false)}>
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
          allUsers={allUsers} 
          getUserImg={getUserImg}
          getUserName={getUserName}
          getUserUsername={getUserUsername}
        />
    </div>
  )
}

export default Navbar