/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
// import { useParams } from 'react-router-dom';
import { updateUser } from '../../Redux/Action/actionAxios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

const departments = [
  {
    value: 'React',
    label: 'React',
  },
  {
    value: 'Node',
    label: 'Node',
  },
  {
    value: 'NET',
    label: 'NET',
  },
  {
    value: 'Design Team',
    label: 'Designer',
  },
];

function EditUser(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    states: '',
    country: '',
    department: '',
    gender: '',
  });
  const {
    firstName, lastName, email, city, states, country, department, gender,
  } = state;
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.axios.user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    if (user) {
      const userUpdateDetails = user.filter((e) => e._id === props.dataUpadateUserId.updateUser);
      setState(...userUpdateDetails);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !email || !city || !states || !country || !department || !gender) {
      setError('Please input all fields');
    } else {
      dispatch(updateUser(state, props.dataUpadateUserId.updateUser));
      setError('');
    }
  };
  return (
    <div align="center">
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="First Name"
          value={firstName}
          name="firstName"
          type="text"
          onChange={handleInputChange}
        />
        {' '}
        <br />
        <TextField
          id="standard-basic"
          label="Last Name"
          value={lastName}
          name="lastName"
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label=" Email"
          value={email}
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        {' '}
        <br />
        <TextField
          id="standard-basic"
          label=" City"
          value={city}
          name="city"
          type="text"
          onChange={handleInputChange}
        />
        {' '}
        <br />
        <TextField
          id="standard-basic"
          label=" State"
          value={states}
          name="states"
          type="text"
          onChange={handleInputChange}
        />
        {' '}
        <br />
        <TextField
          id="standard-basic"
          label=" Country "
          value={country}
          name="country"
          type="text"
          onChange={handleInputChange}
        />
        {' '}
        <br />
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          name="department"
          value={department}
          onChange={handleInputChange}
          helperText="Please select your Department"
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {' '}
        <br />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" align="left">
            Gender:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={gender}
            onChange={handleInputChange}
          >
            <FormControlLabel value="male" name="gender" control={<Radio />} label="Male" />
            <FormControlLabel value="female" name="gender" control={<Radio />} label="Female" />
            <FormControlLabel value="other" name="gender" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        {' '}
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: '100px', marginRight: '30px', marginLeft: '30px' }}
          onChange={handleInputChange}
          onClick={() => props.onHandleSubmit()}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditUser;
