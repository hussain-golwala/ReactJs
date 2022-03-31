/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../scss/header.scss';

const Header = () => (
  <Navbar bg="primary" expand="lg" variant="dark">
    <Container>
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/day2" className="nav-link">
            Day2
          </NavLink>
          <NavLink to="/day3" className="nav-link">
            Day3
          </NavLink>
          <NavLink to="/day4" className="nav-link">
            Day4
          </NavLink>
          <NavLink to="/day6" className="nav-link">
            Day6
          </NavLink>
          <NavLink to="/day7" className="nav-link">
            Day7
          </NavLink>
          <NavLink to="/day8" className="nav-link">
            Day8
          </NavLink>
          <NavLink to="/day9" className="nav-link">
            Day9
          </NavLink>
          <NavLink to="/day10" className="nav-link">
            Day10
          </NavLink>
          <NavLink to="/day11" className="nav-link">
            Day11
          </NavLink>
          <NavLink to="/day12" className="nav-link">
            Day12
          </NavLink>
          <NavLink to="/day13" className="nav-link">
            Day13
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
