/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export class User extends React.Component {
  render() {
    const {
      data: {
        fName,
        lName,
        email,
        username,
        password,
        country,
        state,
        city,
        company,
      },
    } = this.props;
    return (
      <div>
        <h1>
          First Name :
          {' '}
          {fName}
          {' '}
        </h1>
        <h1>
          Last Name :
          {' '}
          {lName}
          {' '}
        </h1>
        <h1>
          Email :
          {' '}
          {email}
          {' '}
        </h1>
        <h1>
          Username :
          {' '}
          {username}
          {' '}
        </h1>
        <h1>
          Password :
          {' '}
          {password}
        </h1>
        <h1>
          Country :
          {' '}
          {country}
          {' '}
        </h1>
        <h1>
          State :
          {' '}
          {state}
          {' '}
        </h1>
        <h1>
          City :
          {' '}
          {city}
          {' '}
        </h1>
        <h1>
          Company :
          {' '}
          {company}
          {' '}
        </h1>
      </div>
    );
  }
}
export default User;
