import { useEffect, useState } from 'react'
import './EditFriend.css'

const EditFriend = ({ clickProfile, user, changeFriend, friends }) => {
  const [userIsFriend, setUserIsFriend] = useState(false)

  useEffect(() => {
    setUserIsFriend(friends.includes(clickProfile))
  },[changeFriend, clickProfile])

  return (
    <div className='edit-friend'>
      {!userIsFriend 
        ? <div 
          className="button-add-friend"
          onClick={() => changeFriend(user.uid, clickProfile, !userIsFriend)}
        >
          Add Friend
        </div>
        : <div 
          className="button-remove-friend"
          onClick={() => changeFriend(user.uid, clickProfile, !userIsFriend)}
        >
          Remove Friend
        </div>
      }
    </div>
  )
}

export default EditFriend