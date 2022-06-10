import './Navbar.css'
import { FaHome as HomeIcon } from 'react-icons/fa'
import navLogo from '../../../images/logo.png'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={navLogo} alt="logo" id='nav-logo'/>

        <Link to={'/'}>
          <HomeIcon className='home-icon'/>
        </Link>

        <SearchBar />
    </div>
  )
}

export default Navbar