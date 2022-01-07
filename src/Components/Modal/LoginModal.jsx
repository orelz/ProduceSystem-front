import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, Modal, Tooltip } from '@material-ui/core';
import { DraftsSharp } from '@material-ui/icons';
import LoginForm from '../Forms/LoginForm';


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
    borderRadius: "25px",
  };
function LoginModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return ( 
        <div>

            
<Tooltip title="התחבר">
        <LoginIcon fontSize="large" onClick={handleOpen} />
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <LoginForm />
        </Box>
      </Modal>

        </div>
     );
}

export default LoginModal;