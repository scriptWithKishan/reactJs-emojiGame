// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {won, points, playAgain} = props

  const restartGame = () => {
    playAgain(points)
  }

  const resultImg = won
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreDisplay = won ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <div>
        <h1 className="win-lose">{won ? 'You Won' : 'You Lose'}</h1>
        <p className="best-score">{scoreDisplay}</p>
        <p className="display-score">{points}/12</p>
        <button className="restart-btn" type="button" onClick={restartGame}>
          Play Again
        </button>
      </div>
      <img className="result-img" src={resultImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
