import React, { Component } from 'react';
import axios from 'axios';
import DisplayData from './DisplayData';
import '../../App.css'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      topic: [],
      value: '',
      searchWords: ''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('https://damp-fortress-54104.herokuapp.com/search?q=reactjs&format=json')
      .then((response) => {
        this.setState({
          topic: response.data.RelatedTopics
        });
    });
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      value: value
    });
  }
  handleSubmit(event) {
    const value = this.state.value;
    this.setState({
      searchWords: value
    });
    event.preventDefault();
  }
  render() {
    // type facebook, javascript, rich, ajax and software to get results from search
    const searchWords = this.state.searchWords;
    const topic = this.state.topic;

    let result = null;
    if (searchWords === 'facebook' ){
      const filterWords = topic.slice(1, 2);
      result = <DisplayData filterWords={filterWords} />
    } else if (searchWords === 'javascript' ){
      const filterWords = topic.slice(0, 1);
      result = <DisplayData filterWords={filterWords} />
    } else if (searchWords === 'rich' ){
      const filterWords = topic.slice(2, 3);
      result = <DisplayData filterWords={filterWords} />
    } else if (searchWords === 'ajax' ){
      const filterWords = topic.slice(3, 4);
      result = <DisplayData filterWords={filterWords} />
    } else if (searchWords === 'software' ){
      const filterWords = topic.slice(4, 5);
      result = <DisplayData filterWords={filterWords} />
    }
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input type='search' placeholder='Type here...' onChange={this.handleChange} />
          <button type='submit' value='submit' >Search</button>
        </form>
        {result}
      </div>
    );
  }
}

export default Search;
