import './Navbar.css'
import { FaHome as HomeIcon } from 'react-icons/fa'
import navLogo from '../../../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={navLogo} alt="logo" id='nav-logo'/>
        <Link to={'/'}>
          <HomeIcon className='home-icon'/>
        </Link>
        <div className="searchbar">Searchbar</div>
    </div>
  )
}

export default Navbar