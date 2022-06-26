import './Friends.css'
import Weather from './Weather/Weather'
/* import Clock from './Clock/Clock' */

const Friends = ({ friends, setClickProfile, getUserImg, setDeletingPost }) => {
  return (
    <div className="friends-div" onClick={() => setDeletingPost(false)}>
      <div className="api-and-game">
          {/* <Clock /> */}

          <Weather />

          {/* <div className="game-div">Game</div> */}
      </div>

      <div className="list-friends">
          <p>Friends</p>
          <div className='items-friends'>
            {friends && friends.map((friendId) => {
              return (
                <div 
                  key={friendId}
                  onClick={() => setClickProfile(friendId)}
                  className='item-friend'
                >
                  <img src={getUserImg(friendId)} className='img-friends'/>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default Friends