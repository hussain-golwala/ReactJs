/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

const isLoadingHOC = (WrappedComponent) => {
  function HOC(props) {
    const [isLoading, setIsLoading] = useState(true);

    const setIsLoadingState = (isComponentLoading) => {
      setIsLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <div>welcome</div>}
        <WrappedComponent {...props} setIsLoading={setIsLoadingState} />
      </>
    );
  }

  return HOC;
};

export default isLoadingHOC;
