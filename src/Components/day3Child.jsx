/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Day3Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Hussain Golwala',
      count: this.props.count,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.count !== state.count) {
      return {
        count: props.count,
      };
    }
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.count);
  }

  render() {
    return (
      <>
        <button onClick={this.props.click}>Click Me!</button>
        <h1>
          My name is:
          {' '}
          {this.state.name}
        </h1>
        <h1>
          Counter:
          {' '}
          {this.state.count}
        </h1>
      </>
    );
  }
}

export default Day3Child;
