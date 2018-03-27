import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem } from 'reactstrap';
import Search from './components/Search/Search';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors';
import LoginView from './components/Login/LoginView';
import CountriesList from './components/CountriesList/CountriesList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Comp 2913 React Final Project</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to='/' tag={RRNavLink}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/CountriesList' tag={RRNavLink}>Countries List</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/LoginView' tag={RRNavLink}>Login View</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/RockPaperScissors' tag={RRNavLink}>Rock-Paper-Scissors Game</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to='/Search' tag={RRNavLink}>Search Data</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
            <Route path='/CountriesList' component={CountriesList} />
            <Route path='/LoginView' component={LoginView} />
            <Route path='/RockPaperScissors' component={RockPaperScissors} />
            <Route path='/Search' component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
