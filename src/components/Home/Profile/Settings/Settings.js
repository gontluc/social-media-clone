import './Settings.css'
import { IoSettingsSharp as SettingsIcon} from 'react-icons/io5'
import { useState } from 'react'
import SettingsDiv from './SettingsDiv/SettingsDiv'

const Settings = () => {
    const [hovering, setHovering] = useState(false)
    const [clickSettings, setClickSettings] = useState(false)

  return (
    <div 
        className="settings" 
        onMouseOver={() => setHovering(!hovering)} 
        onMouseLeave={() => setHovering(!hovering)}
        onClick={() => setClickSettings(!clickSettings)}
    >
        <SettingsIcon className={`settings-icon ${hovering && 'hovering-settings-icon'}`}/>
        Settings

        { clickSettings && <SettingsDiv />}
    </div>
  )
}

export default Settings