/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Day8() {
  const [count, setCount] = useState(0);

  const decCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('Counter does not goes below zero');
      setCount(0);
    }
  };

  return (
    <>
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
    </>
  );
}

export default Day8;
