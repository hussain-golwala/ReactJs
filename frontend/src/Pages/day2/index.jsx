/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import User from '../../Components/day2user';

class Day2App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        fName: 'Hussain',
        lName: 'Golwala',
        email: 'hussain@gmail.com',
        username: 'hussaing',
        password: '123456789',
        city: 'Jamnagar',
        state: 'Gujarat',
        country: 'India',
        company: 'The One Technologies',
      },
    };
  }

  render() {
    return (
      <User data={this.state.data} />
    );
  }
}

export default Day2App;
