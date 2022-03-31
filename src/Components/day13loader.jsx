import React from 'react';
import '../scss/loader.scss';

function Loader() {
  return (
    <div className="col-md-12 center">
      <div className="loader" />
      <h2>Please wait till fetching the data...</h2>
    </div>
  );
}

export default Loader;
