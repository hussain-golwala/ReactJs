/* eslint-disable no-use-before-define */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';

const Day7 = () => {
  const [windowWidth, setWindowWidth] = useState(1920);
  const [windowHeight, setWindowHeight] = useState(969);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
    });
  }, [window.innerHeight]);

  return (

    <h3>
      Window width is:
      {' '}
      {windowWidth}
      {' '}
      <br />
      Window Height:
      {' '}
      {windowHeight}
    </h3>

  );
};

export default Day7;
