import './Settings.css'
import { IoSettingsSharp as SettingsIcon} from 'react-icons/io5'
import { useState } from 'react'
import SettingsDiv from './SettingsDiv/SettingsDiv'

const Settings = ({ SignOut, deleteUser }) => {
    const [hovering, setHovering] = useState(false)
    const [clickSettings, setClickSettings] = useState(false)

  return (
    <div 
      className="settings" 
      onMouseOver={() => setHovering(!hovering)} 
      onMouseLeave={() => setHovering(!hovering)}
      onClick={(e) => {
        e.target === e.currentTarget && setClickSettings(!clickSettings)
      }}
    >
      <SettingsIcon className={`settings-icon ${hovering && 'hovering-settings-icon'}`}/>
      Settings

      { clickSettings 
        && <SettingsDiv 
          clickSettings={clickSettings} 
          setClickSettings={setClickSettings}
          SignOut={SignOut}
          deleteUser={deleteUser}
        />
      }
    </div>
  )
}

export default Settings