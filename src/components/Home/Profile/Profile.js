import './Profile.css'
import Settings from './Settings/Settings'

const Profile = ({ SignOut, user }) => {
  return (
    <div className="profile-div">
        <img 
          /* Gets a bigger img */
          src={user.photoURL.toString().replace("s96-c","s300-c")} 
          alt="profile-pic" 
          className='profile-pic'
        />

        <div className='name'>Lucas Gontijo</div>

        <div className='username'>@lucasgontijo</div>

        <div className="status">Status: Online</div>

        <Settings SignOut={SignOut}/>
    </div>
  )
}

export default Profile