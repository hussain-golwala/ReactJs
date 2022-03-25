/* eslint-disable react/no-unused-state */
import React from 'react';

class Day6User2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Hussain',
    };
  }

  render() {
    return (
      <>
        <h1>User 2</h1>
        <h3>First-Name: James</h3>
        <h3>Last-Name: Bond</h3>
        <h3>Email: jamesbond@gmail.com</h3>
        <h3>Country: India</h3>
        <h3>State: Gujarat</h3>
        <h3>City: Jamnagar</h3>
      </>
    );
  }
}

export default Day6User2;
