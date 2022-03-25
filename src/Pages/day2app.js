/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import User from '../Components/day2user';
import Footer from '../Footer';
import Header from '../Header';

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
      <>
        <Header />
        <User data={this.state.data} />
        <Footer />
      </>
    );
  }
}

export default Day2App;
