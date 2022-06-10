import './NewPost.css'
import { FaTimes as CloseIcon } from 'react-icons/fa'

const NewPost = ({ addingNewPost, setAddingNewPost }) => {
  return (
    <div 
        className='new-post' 
        onClick={(e) => {
            e.target === e.currentTarget && setAddingNewPost(!addingNewPost) 
            }}
    >
        <div className="new-post-div">
            <p>New post</p>
            <CloseIcon 
            className='close-icon' 
            onClick={ () => { setAddingNewPost(!addingNewPost) }}
            />
        </div>
    </div>
  )
}

export default NewPost