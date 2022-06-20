import './NewPost.css'
import { FaTimes as CloseIcon } from 'react-icons/fa'
import { useState } from 'react'

const NewPost = ({ addingNewPost, setAddingNewPost, uploadPost }) => {
  const [postInput, setPostInput] = useState('')

  const sendPost = (e) => {
    e.preventDefault()
    
    uploadPost(postInput)

    setPostInput('')
    setAddingNewPost(!addingNewPost)
  }

  return (
    <div 
      className='new-post' 
      onClick={(e) => {
        e.target === e.currentTarget && setAddingNewPost(!addingNewPost) 
      }}
    >
      <div className="new-post-div">
        <div className="top-new-post">
          <p>New post</p>
          <CloseIcon 
            className='close-icon' 
            onClick={ () => { setAddingNewPost(!addingNewPost) }}
          />
        </div>

        <div className="new-post-input">
          <form onSubmit={sendPost} className='form-post'>
            <textarea 
              type="text" 
              spellCheck={false} 
              autoComplete='off' 
              placeholder='Write something'
              rows={4}
              required={true}
              value={postInput}
              onChange={(e) => setPostInput(e.target.value)}
              className='form-input'
              maxLength={150}
            />
            <button className='post-submit'>Post!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPost