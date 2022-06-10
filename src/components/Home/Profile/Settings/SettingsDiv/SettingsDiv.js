import './SettingsDiv.css'

const SettingsDiv = ({ clickSettings, setClickSettings }) => {
  return (
    <div 
      className='settings-parent-div'
      onClick={(e) => {
        e.target === e.currentTarget && setClickSettings(!clickSettings) 
      }}
    >
      <div className="settings-div">
        <p className='item'>Log out</p>
        <p className='item'>Delete post</p>
        <p className='item'>Delete account</p>
      </div>
    </div>
  )
}

export default SettingsDiv