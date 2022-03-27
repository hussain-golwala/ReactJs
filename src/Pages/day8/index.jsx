/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../../Footer';
import Header from '../../Header';

function Day8() {
  const [count, setCount] = useState(0);

  const decCount = () => {
    if (count < 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      alert('Counter does not goes below zero');
    }
  };

  return (
    <>
      <Header />
      <h1>
        Counter:
        {count}
      </h1>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Increase
      </Button>
      {' '}
      <Button variant="warning" onClick={() => decCount()}>
        Decrease
      </Button>
      {' '}
      <Button variant="danger" onClick={() => setCount(0)}>
        Reset
      </Button>
      <Footer />
    </>
  );
}

export default Day8;
