import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: undefined,
};

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
        {this.props.title}
        <button type="button" className="btn btn-default" onClick={this.onClick}>+ {this.state.count}</button>
      </div>
    );
  }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
