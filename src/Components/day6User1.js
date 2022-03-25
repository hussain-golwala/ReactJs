/* eslint-disable react/no-unused-state */
import React from 'react';

class Day6User1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Hussain',
    };
  }

  render() {
    return (
      <>
        <h1>User 1</h1>
        <h3>First-Name: Hussain</h3>
        <h3>Last-Name: Golwala</h3>
        <h3>Email: hussaingolwala@gmail.com</h3>
        <h3>Country: India</h3>
        <h3>State: Gujarat</h3>
        <h3>City: Jamnagar</h3>
      </>
    );
  }
}

export default Day6User1;
