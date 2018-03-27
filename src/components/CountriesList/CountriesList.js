import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../../App.css';

export default class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state={
      countries: []
    }
  }
  componentWillMount() {
    console.log('before axios Get')
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      this.setState({
        countries: response.data
      });
      }
    );
    console.log('after axios GET')
  }
  render() {
    console.log('render state', this.state);
    const list = this.state.countries.map((data) =>
      <ListGroup>
        <ListGroupItem key={data.name}>{data.name}</ListGroupItem>
      </ListGroup>
    )
    return(
      <div className='App'>
        {list}
      </div>
    );
  }
}
