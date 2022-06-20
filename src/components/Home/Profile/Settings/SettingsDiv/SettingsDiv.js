import './SettingsDiv.css'

const SettingsDiv = ({ clickSettings, setClickSettings, SignOut, deleteUser }) => {
  return (
    <div 
      className='settings-parent-div'
      onClick={(e) => {
        e.target === e.currentTarget && setClickSettings(!clickSettings) 
      }}
    >
      <div className="settings-div">
        <div onClick={() => SignOut()} className='item'>
          Sign Out
        </div>

        <p className='item'>Delete post</p>

        <p 
          className='item' 
          onClick={() => {
            deleteUser()
            SignOut()
          }}
        >
          Delete account
        </p>
      </div>
    </div>
  )
}

export default SettingsDiv