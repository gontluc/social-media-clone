import './Profile.css'
import Settings from './Settings/Settings'
import EditFriend from './EditFriend/EditFriend'

const Profile = ({ 
  SignOut, user, name, username, status, image, deleteUser, clickProfile, setClickProfile, changeFriend, friends, setDeletingPost
}) => {
  return (
    <div className="profile-div">
        <img 
          /* Gets a bigger img */
          src={image} 
          alt="profile-pic" 
          className='profile-pic'
          onClick={() => {
            clickProfile ? setClickProfile(clickProfile) : setClickProfile(user.uid)
          }}
        />

        <div className='name'>{name}</div>

        <div className='username'>{username}</div>

        {clickProfile && clickProfile !== user.uid  
          ? <EditFriend 
              clickProfile={clickProfile} 
              user={user} 
              changeFriend={changeFriend}
              friends={friends}
            />
          : <div></div>
        }

        <div className='status'>
          Status: {status}
          <div className={status}></div>
        </div>

        <Settings 
          SignOut={SignOut} 
          deleteUser={deleteUser} 
          friendProfileOpen={clickProfile && clickProfile !== user.uid}
          setDeletingPost={setDeletingPost}
        />
    </div>
  )
}

export default Profile