import './Settings.css'
import { IoSettingsSharp as SettingsIcon} from 'react-icons/io5'
import { useState } from 'react'

const Settings = () => {
    const [hovering, setHovering] = useState(false)

  return (
    <div 
        className="settings" 
        onMouseOver={() => setHovering(!hovering)} 
        onMouseLeave={() => setHovering(!hovering)}
    >
        <SettingsIcon className={`settings-icon ${hovering && 'hovering-settings-icon'}`}/>
        Settings
    </div>
  )
}

export default Settings