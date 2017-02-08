import React, { Component } from 'react';

export default class ErrorMessanger extends Component {
  render () {
    const letter_count = this.props.count;
    if ( letter_count > 140) {
      return (
        <span style={{ color: 'red' }}> your message is over{letter_count - 140} !!</span>
      );
    }
    else {
      return (
        <span style={{ color: 'blue' }}> your message is remaining {140 - letter_count} !!</span>
      );
    }
  }
}
