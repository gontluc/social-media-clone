import './DarkMode.css'
import { 
  BsSun as Sun, 
  BsSunFill as SunFill, 
  BsMoon as Moon, 
  BsMoonFill as MoonFill 
} from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

const DarkMode = ({ darkMode, onToggle }) => {

  const modeActivated = () => {
    return (
      <>
        <Sun className='icon' onClick={onToggle}/>
        <MoonFill className='icon active' />
      </>
    )
  }

  const modeDeactivated = () => {
    return (
      <>
        <SunFill className='icon active'/>
        <Moon className='icon' onClick={onToggle}/>
      </>
    )
  }

  const location = useLocation()

  return (
    <div className={`dark-mode ${location.pathname === '/home' && 'dark-mode-home'}`}>
      {darkMode ? modeActivated() : modeDeactivated()}
    </div>
  )
}

export default DarkMode