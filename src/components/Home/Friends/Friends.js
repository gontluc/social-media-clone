import './Friends.css'

const Friends = () => {
  return (
    <div className="friends-div">

        <div className="api-and-game">
            <div className="api-div">Weather API</div>
            <div className="game-div">Game</div>
        </div>

        <div className="list-friends">
            Friends
            <div>Friend1</div>
            <div>Friend2</div>
        </div>
    </div>
  )
}

export default Friends