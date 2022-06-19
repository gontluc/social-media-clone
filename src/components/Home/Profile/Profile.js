import './Profile.css'
import Settings from './Settings/Settings'

const Profile = ({ SignOut, user, name, username, status }) => {
  return (
    <div className="profile-div">
        <img 
          /* Gets a bigger img */
          src={user.photoURL.toString().replace("s96-c","s300-c")} 
          alt="profile-pic" 
          className='profile-pic'
        />

        <div className='name'>{name}</div>

        <div className='username'>{username}</div>

        <div className='status'>
          Status: {status}
          <div className={status}></div>
        </div>

        <Settings SignOut={SignOut}/>
    </div>
  )
}

export default Profile