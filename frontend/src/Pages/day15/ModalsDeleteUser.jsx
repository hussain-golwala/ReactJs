/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@mui/material/Modal';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Redux/Action/actionAxios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
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

export default function TransitionsModal(deletedId) {
  const dispatch = useDispatch();
  const buttonStyle = useButtonStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    dispatch(deleteUser(deletedId.deletedId));
    setOpen(false);
  };
  const handleClosed = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2" align="center">
              Are you sure you want to delete user?
            </Typography>
            <div className={buttonStyle.root}>
              <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button
                  color="secondary"
                  style={{ marginRight: '5px' }}
                  onClick={() => handleDelete()}
                >
                  OK
                </Button>
                <Button color="primary" onClick={() => handleClosed()}>Cancel</Button>
              </ButtonGroup>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
