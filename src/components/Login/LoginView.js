import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGetInfo = this.handleGetInfo.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('https://damp-fortress-54104.herokuapp.com/login', this.state).then(
      (response) => {
        this.setState({ token: response.data.token });
        console.log('LINE 26');
      }
    );
    console.log('LINE 28');
  }

  handleGetInfo() {
    axios.get('https://damp-fortress-54104.herokuapp.com/user_info', {
      headers: { Authorization: this.state.token }
    })
  }

  render() {
    console.log(this.state.username, this.state['username']);
    return (
      <div className='App'>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.handleGetInfo}>Get User Info</button>
      </div>
    )
  }
}

export default LoginView;
