import './CommentSection.css'
import firebase from 'firebase/compat/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const CommentSection = ({ arrayComments, users }) => {

    function CommentUser({ username, name, photo, comment }) {
        return (<div className="single-comment">
            <img src={photo} className="comment-profile-img"/>
            <div>
                <div className='name-username'>
                    <div className='name'>{name}</div>
                    <div className='username'>{username}</div>
                </div>
                
                <div className='comment'>{comment}</div>
            </div>
        </div>)
    }

  return (
    <div className='comment-section'>
        {arrayComments.map((element) => {
            const id = Math.floor(Math.random() * 1000) + 1

            return (
                <div key={id}>
                    {/* Photo, Name and Username */}
                    {users && users.map((user) => {
                        const id2 = Math.floor(Math.random() * 1000) + 1
                        return (
                            user.userId === element.userId && <CommentUser 
                                username={user.username} 
                                key={id2}
                                name={user.name}
                                photo={user.photo}
                                comment={element.commentText}
                            />
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default CommentSection