import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Header from '../../Header';

function Day12() {
  return (
    <>
      <Header />
      <div className="col-md-12">
        <h2 className="text-center mt-3 mb-3">Day-12 Redirect Form</h2>
      </div>

      <div className="col-md-8">
        <div className="container">
          <Form>
            <input type="text" className="form-control mb-2" placeholder="Enter page name" />
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Day12;
