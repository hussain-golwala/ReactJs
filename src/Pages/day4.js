/* eslint-disable no-shadow */
/* eslint-disable lines-between-class-members */
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Day4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://61f37bc110f0f7001768c415.mockapi.io/Demo')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          user: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, user } = this.state;
    if (!DataisLoaded) {
      return (
        <div>
          <h1> Please wait some time.... </h1>
          {' '}
        </div>
      );
    }

    return (
      <>
        <Header />
        <div className="App">
          <h1> User Details </h1>
          {' '}
          {user.map((user) => (
            <ol key={user.id}>
              First-Name:
              {' '}
              {user.first_name}
              , Last-Name:
              {' '}
              {user.last_name}
              , Email:
              {' '}
              {user.email}
            </ol>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default Day4;
