/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import '../../scss/day11.scss';
import { Button, Card } from 'react-bootstrap';

function Day11() {
  const [user, setUser] = useState('');

  const handleReset = (values) => {
    setUser(values);
  };
  const InitialValue = {
    fname: '',
    lname: '',
    pass: '',
    cpass: '',
    email: '',
    gender: '',
    department: '',
    tnc: '',
  };

  const formValidate = yup.object().shape({
    fname: yup.string().required('First Name is required'),
    lname: yup.string().required('Last Name is required'),
    pass: yup.string().required('Password is required'),
    cpass: yup.string().required('Confirm Password is required'),
    email: yup.string().required('Email is required').email('Please enter valid email'),
    gender: yup.string().required('Gender is required'),
  });

  const handleSubmit = (values) => {
    setUser(values);
    console.log('Submitted form', values);
  };

  return (
    <>
      <div className="col-md-12 shadow">
        <h2 className="text-center mt-3 mb-3">User Form Validation</h2>
      </div>
      <div className="col-md-12">
        <div className="container p-5 center shadow">
          <Formik
            initialValues={InitialValue}
            onSubmit={((values) => handleSubmit(values))}
            validationSchema={formValidate}
          >
            <Form>
              <label className="form-label">
                First Name:
                <super>*</super>
              </label>
              <br />
              <Field
                type="text"
                name="fname"
                placeholder="Enter first name"
                className="form-control mb-4"
              />
              <p className="txtcolor">
                <ErrorMessage name="fname" />
              </p>

              <label className="form-label">
                Last Name:
                <super>*</super>
              </label>
              <br />
              <Field
                type="text"
                name="lname"
                placeholder="Enter last name"
                className="form-control mb-4"
              />
              <p className="txtcolor">
                <ErrorMessage name="lname" />
              </p>

              <label className="form-label">
                Password:
                <super>*</super>
              </label>
              <br />
              <Field
                type="password"
                name="pass"
                placeholder="Enter password"
                className="form-control mb-4"
              />
              <p className="txtcolor">
                <ErrorMessage name="pass" />
              </p>

              <label className="form-label">
                Confirm Password:
                <super>*</super>
              </label>
              <br />
              <Field
                type="password"
                name="cpass"
                placeholder="Enter Confirm Password"
                className="form-control mb-4"
              />
              <p className="txtcolor">
                <ErrorMessage name="cpass" />
              </p>

              <label className="form-label">
                Email:
                <super>*</super>
              </label>
              <br />
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                className="form-control mb-4"
              />
              <p className="txtcolor">
                <ErrorMessage name="email" />
              </p>

              <label className="form-label me-3">
                Gender:
                <super>*</super>
              </label>
              <label className="me-3">
                <Field
                  type="radio"
                  value="Male"
                  name="gender"
                  className="me-1"
                />
                Male
              </label>

              <label className="me-1">
                <Field
                  type="radio"
                  value="Female"
                  name="gender"
                  className="me-1"
                />
                Female
              </label>
              <br />
              <p className="txtcolor">
                <ErrorMessage name="gender" />
              </p>

              <label className="form-label mt-3">
                Department:
                <super>*</super>
              </label>
              <select className="form-select">
                <option value="select" label="--Select--" />
                <option value="reactjs" label="ReactJs" name="department" />
                <option value="angular" label="Angular" name="department" />
                <option value=".net" label=".Net" name="department" />
              </select>
              <br />
              <label className="mb-3">
                <Field
                  type="checkbox"
                  name="tnc"
                  value="Accepted"
                  className="me-2"
                />
                I accept Terms & Conditions
              </label>
              <br />
              <p className="txtcolor">
                <ErrorMessage name="tnc" />
              </p>
              <Button className="btn btn-primary" type="submit">Submit</Button>
              {' '}
              <Button className="btn btn-danger" type="reset" onClick={handleReset}>Reset</Button>
              {' '}

            </Form>
          </Formik>
        </div>

        <div className="col-md-12 mt-3 mb-3">
          <h2 className="text-center">Display Data</h2>
        </div>

        <div className="container color center shadow mt-5 p-5">
          <Card style={{ width: '50rem' }}>
            <Card.Body>
              <h1 className="text-center mt-3 mb-3">Display Form Data</h1>
              <Card.Text>
                <div className="text-center">
                  <h3>
                    Firstname:
                    {user.fname}
                  </h3>
                  <h3>
                    Lastname:
                    {user.lname}
                  </h3>
                  <h3>
                    Passsword:
                    {user.pass}
                  </h3>
                  <h3>
                    Confirm Password:
                    {user.cpass}
                  </h3>
                  <h3>
                    Email:
                    {user.email}
                  </h3>
                  <h3>
                    Gender:
                    {user.gender}
                  </h3>
                  <h3>
                    I accept Terms & Conditions:
                    {user.tnc}
                  </h3>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Day11;
