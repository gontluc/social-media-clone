import './Navbar.css'
import { FaHome as HomeIcon } from 'react-icons/fa'
import navLogo from '../../../images/logo.png'
import SearchBar from './SearchBar/SearchBar'

const Navbar = ({ setClickProfile }) => {
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
        
        <SearchBar />
    </div>
  )
}

export default Navbar