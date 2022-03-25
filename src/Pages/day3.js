/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React from 'react';
import Day3Child from '../Components/day3Child';
import Footer from '../Footer';
import Header from '../Header';

class Day3 extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <>
        <Header />
        <h1>
          Count:
          {' '}
          {this.state.count}
        </h1>
        <Day3Child
          click={this.updateCount}
          name="Hussain Golwala"
          count={this.state.count}
        />
        <Footer />
      </>
    );
  }
}

export default Day3;
