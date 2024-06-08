/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    selectedId: [],
    won: false,
    gameOver: false,
    prevId: null,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {selectedId, score} = this.state
    const {emojisList} = this.props
    emojisList.sort(() => Math.random() - 0.5)

    if (selectedId.includes(id)) {
      this.setState({
        gameOver: true,
      })
    } else if (score === 11) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        won: true,
        gameOver: true,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }

    this.setState({
      selectedId: [...selectedId, id],
    })
  }

  playAgain = points => {
    const {score} = this.state

    this.setState(prevState => {
      if (prevState.topScore >= points) {
        return {
          topScore: prevState.topScore,
          score: 0,
          gameOver: false,
          selectedId: [],
        }
      }
      return {
        topScore: score,
        score: 0,
        gameOver: false,
        selectedId: [],
      }
    })
  }

  render() {
    const {score, topScore, won, selectedId, gameOver} = this.state
    const {emojisList} = this.props
    console.log(selectedId)

    return (
      <div className="bg-container">
        <NavBar game={gameOver} score={score} topScore={topScore} />
        <div className="display-container">
          {!gameOver ? (
            <ul className="emoji-list">
              {emojisList.map(eachEle => (
                <EmojiCard
                  key={eachEle.id}
                  emojiDetails={eachEle}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              won={won}
              playAgain={this.playAgain}
              points={score}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
