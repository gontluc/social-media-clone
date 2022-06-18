import { useState } from 'react'
import './AddComment.css'

const AddComment = ({ photoUrl, uploadComment, userId, postId }) => {
  const [commentActive, setCommentActive] = useState(false)
  const [formInput, setFormInput] = useState('')

  const sendComment = async (e) => {
    e.preventDefault()

    uploadComment(userId, formInput, postId)

    setFormInput('')
  }

  return (
    <div className="add-comment">
        <img src={photoUrl} className='comment-profile-img' />
        <form 
          className='form-comment' 
          onSubmit={sendComment}
        >
          <textarea 
              type="text" 
              spellCheck={false} 
              autoComplete='off' 
              placeholder='Write your comment!'
              className='write-comment'
              rows={2}
              required={true}
              onClick={() => !commentActive && setCommentActive(!commentActive)}
              value={formInput}
              onChange={(e) => setFormInput(e.target.value)}
          />

          {commentActive && <button className='comment-submit'>Respond</button>}
        </form>
    </div>
  )
}

export default AddComment