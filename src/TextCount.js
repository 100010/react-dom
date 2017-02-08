import React, { Component } from 'react';

export default class TextCount extends Component {
  render () {
    const count = this.props.count;
    const name = this.props.text;
    return (
      <div>
        <span style={{color: 'red'}}>{count}</span>
        <span>{name}</span>
      </div>
    );
  }
}
