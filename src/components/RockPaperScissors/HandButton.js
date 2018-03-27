import React, { Component } from 'react';

export default class HandButton extends Component {
  render() {
    const styles = {
      border: '5px solid black',
      borderRadius: 5,
      width: 100
    };
    return (
      <img
        style={styles}
        src={this.props.imageSrc}
        onClick={this.props.onClick}
      />
    );
  }
}
