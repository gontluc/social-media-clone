import './DarkMode.css'
import { 
  BsSun as Sun, 
  BsSunFill as SunFill, 
  BsMoon as Moon, 
  BsMoonFill as MoonFill 
} from 'react-icons/bs'

const DarkMode = ({ darkMode, onToggle, user }) => {

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

  return (
    <div className={`dark-mode ${user && 'dark-mode-home'}`}>
      {darkMode ? modeActivated() : modeDeactivated()}
    </div>
  )
}

export default DarkMode