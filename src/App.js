import React, { Component } from 'react';
import TextCount from './TextCount';


// 140文字以上になったらエラーメッセージを出す


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'James',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickResetButton = this.onClickResetButton.bind(tihs);
  }

  onChangeInput(event) {
    this.setState({
      name: event.target.value,
    });
  };

  onClickResetButton() {
    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Hello, {name}.</h1>
        <input
          type="text"
          value={name}
          onChange={this.onChangeInput}
        />
        <TextCount
          count={name.length}
          text={name}
        />
        <button
          onClick={this.onClickResetButton}
        >
          reset
        </button>
      </div>
    );
  }
}
