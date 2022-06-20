import './AddPost.css'
import { RiChatSmile3Line as NewPostIcon } from 'react-icons/ri'
import NewPost from './NewPost/NewPost'
import { useState } from 'react'

const AddPost = ({ uploadPost }) => {
  const [addingNewPost, setAddingNewPost] = useState(false)

  return (
    <div className='add-post' onClick={() => {!addingNewPost && setAddingNewPost(!addingNewPost)}}>
      <NewPostIcon className='new-post-icon'/>

      {addingNewPost && <NewPost 
        addingNewPost={addingNewPost} 
        setAddingNewPost={setAddingNewPost}
        uploadPost={uploadPost}
      />}
    </div>
  )
}

export default AddPost