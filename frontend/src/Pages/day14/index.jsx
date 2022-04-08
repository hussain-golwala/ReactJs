/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-debugger */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Buttons from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import {
  getUsers, addUsers, editUsers, deleteUsers,
} from '../../Redux/Action/actionfile';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class Day14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      department: '',
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  submitData = () => {
    if (this.state.name && this.state.department && !this.state.id) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        name: this.state.name,
        department: this.state.department,
      };

      this.props.addUsers(newEmployee);
    } else if (this.state.name && this.state.department && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        name: this.state.name,
        department: this.state.department,
      };

      this.props.editUsers(updatedDetails);
    } else {
      alert('Enter Employee Details.');
    }

    this.clearData();
  };

  editDetails = (data) => {
    this.setState({
      id: data.id,
      name: data.name,
      department: data.department,
    });
  };

  deleteUsers = (id) => {
    this.clearData();
    if (window.confirm('Are you sure?')) {
      this.props.deleteUsers(id);
    }
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      department: e.target.value,
    });
  };

  clearData = () => {
    this.setState({
      id: 0,
      name: '',
      department: '',
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 className="App-title mb-5">CRUD Operations Using React Redux</h1>
        <Form className="leftsection mb-5">
          Name :
          {' '}
          <input
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            placeholder="Name"
          />
          {' '}
          <br />
          <br />
          Department :
          {' '}
          <input
            onChange={this.handleDepartmentChange}
            value={this.state.department}
            type="text"
            placeholder="Department"
          />
          <br />
          <br />
          {this.state.id ? (
            <Button
              variant="primary"
              type="button"
              onClick={this.submitData}
              style={{ marginRight: '10px' }}
            >
              UPDATE
            </Button>
          ) : (
            <Buttons
              variant="contained"
              color="primary"
              type="button"
              onClick={this.submitData}
              style={{ marginRight: '10px' }}
            >
              ADD
            </Buttons>
          )}
          {' '}
          <Button type="button" onClick={this.clearData} variant="danger">
            CLEAR
          </Button>
        </Form>
        <TableContainer component={Paper}>
          <Table aria-label="customized table" style={{ Width: '500px' }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Department Name</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.users
                && this.props.users.map((data, index) => (
                  <StyledTableRow key={data.id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">{data.name}</StyledTableCell>
                    <StyledTableCell align="center">{data.department}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="primary"
                        type="button"
                        onClick={() => this.editDetails(data)}
                        style={{ marginRight: '20px' }}
                      >
                        <EditIcon />
                        {' '}
                        Edit
                      </Button>
                      {' '}
                      <Button
                        variant="danger"
                        type="button"
                        onClick={() => this.deleteUsers(data.id)}
                      >
                        <DeleteIcon />
                        {' '}
                        Delete
                      </Button>
                      {' '}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
Day14.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
  addUsers: PropTypes.func.isRequired,
  editUsers: PropTypes.func.isRequired,
  deleteUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  users: state.users.items,
});

export default connect(mapStateToProps, {
  getUsers,
  addUsers,
  editUsers,
  deleteUsers,
})(Day14);
