/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
import { Button } from 'react-bootstrap';
import React from 'react';
import Day6User1 from '../../Components/day6User1';
import Day6User2 from '../../Components/day6User2';
import Header from '../../Header';
import Footer from '../../Footer';

class Day6 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Hussain',
      showchild1: false,
      showchild2: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(varname) {
    // console.log(varname);
    switch (varname) {
      case 'showchild1':
        this.setState({ showchild1: !this.state.showchild1 });
        break;
      case 'showchild2':
        this.setState({ showchild2: !this.state.showchild2 });
        break;
      default:
    }
  }

  render() {
    const { showchild1, showchild2 } = this.state;
    return (
      <div>
        <Header />
        <div className="container" style={{ marginTop: '10px' }}>
          <div className="row one">
            <div className="col one">
              <h1>User 1</h1>
            </div>
            <div className="col second">
              <Button
                style={{ marginTop: '5px' }}
                onClick={() => this.hideComponent('showchild1')}
                variant="primary"
              >
                Show More
              </Button>
              {' '}
            </div>
          </div>
          <div className="row one">
            <div className="col three">
              <h1>User 2</h1>
            </div>
            <div className="col four">
              <Button
                style={{ marginTop: '20px' }}
                onClick={() => this.hideComponent('showchild2')}
                variant="primary"
              >
                Show More
              </Button>
              {' '}
            </div>
          </div>
          <div>
            <hr style={{ height: '5px' }} />
          </div>
          <div className="row two">
            <div className="col five">{showchild1 && <Day6User1 />}</div>
            <div className="col six">{showchild2 && <Day6User2 />}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Day6;
