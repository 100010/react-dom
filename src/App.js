import React, { Component } from 'react';
import TextCount from './TextCount';
import ErrorMessanger from './ErrorMessanger';


// 140文字以上になったらエラーメッセージを出す
// css を付け足す

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'James',
      item: 'ipone',
      skill: 'git',
      like: 'programming',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onClickResetButton = this.onClickResetButton.bind(this);
    this.onClickSenjuButton = this.onClickSenjuButton.bind(this);
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

  onClickSenjuButton() {
    this.setState({
      name: 'Senjuやで :fire:',
    });
  };

  addClassButton() {
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
        <ErrorMessanger
          count={name.length}
        />
        <button
          onClick={this.onClickResetButton}
        >
          reset
        </button>
        <button
          onClick={this.onClickSenjuButton}
        >
          senju
        </button>
      </div>
    );
  }
}
