import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard';
import HandButton from './HandButton';
import paperImage from './assets/paper.png';
import rockImage from './assets/rock.png';
import scissorsImage from './assets/scissors.png';
import '../../App.css';

function getRandomHandPick() {
  const randomNumber = Math.round(Math.random() * 100);
  if (randomNumber < 33) {
    return 'rock';
  } else if (randomNumber < 67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function hasPlayerWon(playerPick, computerPick) {
  return playerPick === 'rock' && computerPick === 'scissors' ||
         playerPick === 'paper' && computerPick === 'rock' ||
         playerPick === 'scissors' && computerPick === 'paper';
}

export default class RockPaperScissors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerScore: 0,
      computerScore: 0
    };
    this.resetGame = this.resetGame.bind(this);
    this.handleHandButtonClick = this.handleHandButtonClick.bind(this);
  }

  resetGame() {
    this.setState({
      playerScore: 0,
      computerScore: 0
    });
  }

  handleHandButtonClick(playerPick) {
    const computerPick = getRandomHandPick();

    if (playerPick === computerPick) {
      alert("It's a tie!");
    } else if (hasPlayerWon(playerPick, computerPick)) {
      this.setState({ playerScore: this.state.playerScore + 1 }, () => {
        if (this.state.playerScore === 5) {
          alert('You won the game!');
        } else {
          alert("You won!");
        }
      });
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 }, () => {
        if (this.state.computerScore === 5) {
          alert('You lost the game...');
        } else {
          alert("You lost!");
        }
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Rock Paper Scissors</h1>
        <ScoreBoard
          playerScore={this.state.playerScore}
          computerScore={this.state.computerScore}
        />
        <br />
        <HandButton
          imageSrc={paperImage}
          onClick={() => this.handleHandButtonClick('paper')}
        />
        <HandButton
          imageSrc={rockImage}
          onClick={() => this.handleHandButtonClick('rock')}
        />
        <HandButton
          imageSrc={scissorsImage}
          onClick={() => this.handleHandButtonClick('scissors')}
        />
        <br />
        <br />
        <button onClick={this.resetGame}>Reset</button>
      </div>
    );
  }
}
