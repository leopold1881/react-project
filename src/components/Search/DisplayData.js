import React, { Component } from 'react';

class App extends Component {
  render() {
    const { filterWords } = this.props;
    return (
      <div>
        {filterWords.map((words, i) =>
          <a href={words.FirstURL} key={i}>{words.Text}</a>
        )}
      </div>
    );
  }
}

export default App;
