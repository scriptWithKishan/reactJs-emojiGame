// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, game} = props

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="emoji-display">Emoji Game</h1>
        </li>
        {!game ? (
          <>
            <li className="nav-item score">
              <p>Score: {score}</p>
            </li>
            <li className="nav-item">
              <p>Top Score: {topScore}</p>
            </li>
          </>
        ) : (
          ''
        )}
      </ul>
    </nav>
  )
}

export default NavBar
