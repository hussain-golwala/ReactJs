import React, { useEffect, useState } from 'react';
import isLoadingHOC from '.';
import Loader from '../../Components/day13loader';
import Header from '../../Header';

function FetchApi() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch('https://61f37bc110f0f7001768c415.mockapi.io/Demo')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {isLoading && <p><Loader /></p>}
      {users.length > 0 && (
        <div className="container center">
          <h1> User Details </h1>
          {' '}
          {users.map((user) => (
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
      )}
    </div>
  );
}

export default isLoadingHOC(FetchApi);
