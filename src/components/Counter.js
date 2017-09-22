import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      count: 0,
    };
  }

  onClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-default" onClick={this.onClick}>+ {this.state.count}</button>
      </div>
    );
  }
}

export default Counter;
