import './Post.css'
import { AiOutlineHeart as NotLike, AiFillHeart as Like } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { FaComments as Comments } from 'react-icons/fa'
import CommentSection from './CommentSection/CommentSection'
import AddComment from './AddComment/AddComment'
import { FaTimes as DeleteIcon } from 'react-icons/fa'

const Post = ({ 
  postId, post, profileImg, userId, changeLike, currentUserImg, uploadComment, users, name, username, postedBy, clickProfile, setClickProfile, deletingPost, setDeletingPost, deletePost
}) => {
  const [like, setLike] = useState(false)
  const [commentSectionActive, setCommentSectionActive] = useState(false)
  
  useEffect(() => {
    setLike(post.likedBy.includes(userId))
  },[post.likedBy, userId])

  useEffect(() => {
    commentSectionActive && setCommentSectionActive(!commentSectionActive)
  },[clickProfile])

    return (
      <div className='post'>
        <div className='top-post'>
          <img 
            className='google-profile-img' 
            src={profileImg} 
            onClick={() => setClickProfile(postedBy)}
          />

          <div className='text-div'>
            <div className='name-username'>
              <div className='name'>{name}</div>
              <div className='username'>{username}</div>
            </div>

            <div className='post-text'>
              {post.text}
              <div className='like-comments'>
                  {like 
                    ? <Like className='like' onClick={() => changeLike(userId, like, postId)}/>
                    : <NotLike className='not-like' onClick={() => changeLike(userId, like, postId)}/> 
                  }

                  <div className='number-likes'>
                    {post.likedBy.length > 0 && post.likedBy.length}
                  </div>

                  <Comments 
                    className='comments' 
                    onClick={() => setCommentSectionActive(!commentSectionActive)}
                  />

                  <div className='number-comments'>
                    {post.comments.length > 0 && post.comments.length}
                  </div>
              </div>
            </div>
          </div>
        </div>

        {commentSectionActive && <AddComment 
          photoUrl={currentUserImg}
          uploadComment={uploadComment}
          userId={userId}
          postId={postId}
          setClickProfile={setClickProfile}
        />}

        {commentSectionActive && <CommentSection 
          arrayComments={post.comments}
          users={users}
          setClickProfile={setClickProfile}
        />}

        {/* <div>PostImage</div> */}

        {deletingPost && <DeleteIcon className='delete-post-icon' onClick={() => {
          deletePost(postId)
          setDeletingPost(false)
        }}/>}

      </div>
    )
}

export default Post