import './Profile.css'
import lucas from '../../../images/lucas2.jpg'
import Settings from './Settings/Settings'

const Profile = ({ SignOut }) => {
  return (
    <div className="profile-div">
        <img src={lucas} alt="profile-pic" className='profile-pic'/>
        <div className='name'>Lucas Gontijo</div>
        <div className='username'>@lucasgontijo</div>
        <div className="status">Status: Online</div>
        <Settings SignOut={SignOut}/>
    </div>
  )
}

export default Profile