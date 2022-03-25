import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';

function Day10() {
  return (
    <>
      <Header />
      <h2 style={{ textAlign: 'center' }}>Day 10 Child Routing, Query Parameters</h2>
      <ul>
        <NavLink className="m-3" to="node">Node</NavLink>
        <NavLink className="m-3" to="react">ReactJs</NavLink>
        <NavLink className="m-3" to="angular">AngularJs</NavLink>
      </ul>
      <ul>
        <NavLink to="users?sort=hussain&pageno=10&pagesize=100">
          User Details
        </NavLink>
      </ul>
      <Outlet />
      <Footer />
    </>
  );
}

export default Day10;
