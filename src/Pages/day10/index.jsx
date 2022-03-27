import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import '../../scss/days.scss';

function Day10() {
  return (
    <>
      <Header />
      <div className="container text-center">
        <h3>
          Day 10 Child Routing, Query Parameters
        </h3>
        <div className="child">
          <ul>
            <NavLink to="node" className="m-4">Node</NavLink>
            <NavLink to="react" className="m-4">ReactJs</NavLink>
            <NavLink to="angular" className="m-4">AngularJs</NavLink>
          </ul>
        </div>
        <div className="child">
          <ul>
            <NavLink to="users?sort=hussain&pageno=10&pagesize=100">
              User Details
            </NavLink>
          </ul>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Day10;
