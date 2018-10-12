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
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { title } = this.props;
    const { count } = this.state;

    return (
      <div>
        {title}
        <button type="button" className="btn btn-default" onClick={this.onClick}>
          {count}
        </button>
      </div>
    );
  }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;
