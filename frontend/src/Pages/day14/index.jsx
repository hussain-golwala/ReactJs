/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable react/sort-comp */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/static-property-placement */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import '../../scss/day14.scss';
import {
  getEmployee, addEmployee, editEmployee, deleteEmployee,
} from '../../Redux/actions';

class Day14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      employeeName: '',
      employeeDepartment: '',
    };
  }

  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEmployee();
  }

  submitData = () => {
    if (this.state.employeeName && this.state.employeeDepartment && !this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment,
      };

      this.props.addEmployee(newEmployee);
    } else if (this.state.employeeName && this.state.employeeDepartment && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment,
      };

      this.props.editEmployee(updatedDetails);
    } else {
      alert('Enter Employee Details.');
    }

    this.clearData();
  };

  editDetails = (data) => {
    this.setState({
      id: data.id,
      employeeName: data.employeeName,
      employeeDepartment: data.employeeDepartment,
    });
  };

  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm('Are you sure?')) {
      this.props.deleteEmployee(id);
    }
  };

  handleNameChange = (e) => {
    this.setState({
      employeeName: e.target.value,
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      employeeDepartment: e.target.value,
    });
  };

  clearData = () => {
    this.setState({
      id: 0,
      employeeName: '',
      employeeDepartment: '',
    });
  };

  render() {
    return (
      <div className="container center">
        <header className="App-header">
          <h2 className="App-title mt-3">CRUD operation using React Redux</h2>
        </header>
        <p className="App-intro">
          <div className="leftsection">
            <label className="form-control">Employee Name :</label>
            {' '}
            <input className="form-control" onChange={this.handleNameChange} value={this.state.employeeName} type="text" placeholder="Employee Name" />
            {' '}
            <br />
            <label className="form-control">Employee Department :</label>
            {' '}
            <input className="form-control" onChange={this.handleDepartmentChange} value={this.state.employeeDepartment} type="text" placeholder="Employee Department" />
            <br />
            {this.state.id ? <Button className="btn btn-primary" onClick={this.submitData}>UPDATE</Button> : <Button className="btn btn-primary" onClick={this.submitData}>ADD</Button>}
            {' '}
            <Button className="btn btn-danger" onClick={this.clearData}>CLEAR</Button>
          </div>
          <div className="rightsection mt-5" style={{ width: '400px' }}>
            <table>
              <thead style={{ backgroundColor: 'black', color: 'white' }}>
                <tr>
                  <th>ID</th>
                  <th className="text-center">Name</th>
                  <th>Depatment Name</th>
                  <th className="text-center">Action(s)</th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees && this.props.employees.map((data, index) => (
                  <tr key={(index + 1)}>
                    <td className="text-center">{(index + 1)}</td>
                    <td className="text-center">{data.employeeName}</td>
                    <td className="text-center">{data.employeeDepartment}</td>
                    <td>
                      <Button className="btn btn-primary" onClick={() => this.editDetails(data)}>EDIT</Button>
                      {' '}
                      <Button className="btn btn-danger" onClick={() => this.deleteEmployee(data.id)}>DELETE</Button>
                      {' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, {
  getEmployee, addEmployee, editEmployee, deleteEmployee,
})(Day14);
