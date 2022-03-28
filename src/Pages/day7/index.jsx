/* eslint-disable no-use-before-define */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import Footer from '../../Footer';
import Header from '../../Header';

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

    <>
      <Header />
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
      <Footer />
    </>

  );
};

export default Day7;
