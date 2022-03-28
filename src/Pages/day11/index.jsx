/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Form, Field } from 'formik';
import React from 'react';
import '../../scss/day11.scss';
import { Button } from 'react-bootstrap';
import Header from '../../Header';

function Day11() {
  return (
    <>
      <Header />
      <div className="col-md-12">
        <h2 className="text-center mt-3 mb-3">User Form Validation</h2>
      </div>
      <div className="col-md-12">
        <div className="container center">
          <Formik>
            <Form>
              <label className="form-label">First Name:</label>
              <br />
              <Field
                type="text"
                placeholder="Enter first name"
                className="form-control mb-4"
              />

              <label className="form-label">Last Name:</label>
              <br />
              <Field
                type="text"
                placeholder="Enter last name"
                className="form-control mb-4"
              />

              <label className="form-label">Password:</label>
              <br />
              <Field
                type="password"
                placeholder="Enter password"
                className="form-control mb-4"
              />

              <label className="form-label">Confirm Password:</label>
              <br />
              <Field
                type="password"
                placeholder="Enter Confirm Password"
                className="form-control mb-4"
              />

              <label className="form-label">Email:</label>
              <br />
              <Field
                type="email"
                placeholder="Enter email"
                className="form-control mb-4"
              />

              <label className="form-label me-3">Gender:</label>
              <label className="me-3">
                <Field
                  type="radio"
                  value="male"
                  className="me-1"
                />
                Male
              </label>

              <label className="me-1">
                <Field
                  type="radio"
                  value="female"
                  className="me-1"
                />
                Female
              </label>
              <br />

              <label className="form-label mt-3">Department:</label>
              <select className="form-select">
                <option value="select" label="--Select--" />
                <option value="react" label="ReactJs" />
                <option value="angular" label="Angular" />
                <option value="dotnet" label=".Net" />
              </select>
              <br />
              <label className="mb-3">
                <Field
                  type="checkbox"
                  className="me-2"
                />
                I accept Terms & Conditions
              </label>
              <br />
              <Button type="submit" variant="primary">Submit</Button>
              {' '}
              <Button type="reset" variant="danger">Reset</Button>
              {' '}

            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Day11;
