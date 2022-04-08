/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Model';
import Modals from './ModalsDeleteUser';
import ModalUpdated from './ModelUpdate';

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: theme.palette.common.bold,
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

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

function Day15(props) {
  const classes = useStyles();
  const buttonStyle = useButtonStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.axios.user);
  const [flag, setFlag] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState();
  const [updated, setUpdated] = useState(false);
  const [updatedUser, setUpdatedUser] = useState();
  const toggleFlag = () => {
    setFlag((prevCheck) => !prevCheck);
  };
  const handleDelete = (id) => {
    setDeleted((prevCheck) => !prevCheck);
    setDeleteUserId(id);
  };
  const handleUpdate = (id) => {
    setUpdated((prevCheck) => !prevCheck);
    setUpdatedUser(id);
  };

  return (
    <div>
      {/* {props.Loading === false ? ( */}
      {flag && <Modal />}
      {deleted && <Modals deletedId={deleteUserId} />}
      {updated && <ModalUpdated updateUser={updatedUser} />}
      <h1 className="App-title mb-5" align="center">
        CRUD Operations using Axious and Node
      </h1>
      <div className={buttonStyle.root}>
        <Button variant="contained" color="primary" onClick={toggleFlag}>
          ADD USER
        </Button>
      </div>
      <Card style={{ width: '1000' }}>
        <Card.Text>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="center">First Name</StyledTableCell>
                  <StyledTableCell align="center">Last Name</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">City</StyledTableCell>
                  <StyledTableCell align="center">State</StyledTableCell>
                  <StyledTableCell align="center">Country</StyledTableCell>
                  <StyledTableCell align="center">Department</StyledTableCell>
                  <StyledTableCell align="center">Gender</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                              && data.map((users, index) => (
                                <StyledTableRow key={users.id}>
                                  <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                  </StyledTableCell>
                                  <StyledTableCell align="center">{users.firstName}</StyledTableCell>
                                  <StyledTableCell align="center">{users.lastName}</StyledTableCell>
                                  <StyledTableCell align="center">{users.email}</StyledTableCell>
                                  <StyledTableCell align="center">{users.city}</StyledTableCell>
                                  <StyledTableCell align="center">{users.states}</StyledTableCell>
                                  <StyledTableCell align="center">{users.country}</StyledTableCell>
                                  <StyledTableCell align="center">{users.department}</StyledTableCell>
                                  <StyledTableCell align="center">{users.gender}</StyledTableCell>
                                  <StyledTableCell align="center">
                                    <div className={buttonStyle.root}>
                                      <ButtonGroup
                                        variant="contained"
                                        aria-label="contained primary button group"
                                      >
                                        <Button
                                          color="secondary"
                                          style={{ marginRight: '5px' }}
                                          onClick={() => handleDelete(users._id)}
                                        >
                                          Delete
                                        </Button>
                                        <Button color="primary" onClick={() => handleUpdate(users._id)}>
                                          Update
                                        </Button>
                                      </ButtonGroup>
                                    </div>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card.Text>
      </Card>
      )
      {/* : null } */}
    </div>
  );
}

export default Day15;
