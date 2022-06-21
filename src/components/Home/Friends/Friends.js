import './Friends.css'
/* import Clock from './Clock/Clock' */

const Friends = ({ friends, setClickProfile, getUserImg }) => {
  return (
    <div className="friends-div">
      <div className="api-and-game">
          {/* <Clock /> */}
          <div className="api-div">Weather API</div>
          {/* <div className="game-div">Game</div> */}
      </div>

      <div className="list-friends">
          <p>Friends</p>
          {friends && friends.map((friendId) => {
            return (
              <div 
                key={friendId}
                onClick={() => setClickProfile(friendId)}
              >
                <img src={getUserImg(friendId)} className='img-friends'/>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Friends