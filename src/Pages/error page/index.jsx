import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/error.scss';

function Error() {
  return (
    <div className="container text-center mt-3 text">
      <h1>404 Page not Found</h1>
      <div className="text-center mt-5 home">
        <NavLink to="/">Return to Home Page</NavLink>
      </div>
    </div>
  );
}

export default Error;
