import React, { Component } from 'react';

export default class ScoreBoard extends Component {
  render() {
    return (
      <div>
        <div>
          Player - {this.props.playerScore}
        </div>
        <div>
          Computer - {this.props.computerScore}
        </div>
      </div>
    );
  }
}
