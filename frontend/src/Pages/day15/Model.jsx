import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Form from './AddUser';
import MessagePopup from './MessagePopup';

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

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(true);
  const [message, setMessage] = useState(false);
  const handleClose = () => setOpen(false);
  const dataSubmit = () => {
    setMessage(true);
    setTimeout(() => {
      setOpen(false);
      setMessage(false);
    }, 3000);
  };

  return (
    <div>
      { message && <MessagePopup messagePopup={message} /> }
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
              Add User Details
            </Typography>
            <Form dataSubmit={dataSubmit} msg={setMessage} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
