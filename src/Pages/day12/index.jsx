/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../scss/day12.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header';

function Day12() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <>
      <Header />
      <div className="col-md-12">
        <h2 className="text-center mt-3 mb-3">Day-12 Redirect Form</h2>
      </div>

      <div className="col-md-12">
        <div className="container center">
          <Form className="form-inline">
            <input type="text" className="form-control mb-2" onChange={input} placeholder="Enter page name" />
            <Button type="submit" className="btn btn-primary" onClick={() => handleClick()}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Day12;
