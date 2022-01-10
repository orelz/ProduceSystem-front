import { Box, Modal, Tooltip } from '@material-ui/core';
import { DraftsSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import ReadProduceForm from '../Forms/ReadProduceForm';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    height: 1000,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 5,
    borderRadius: "25px",
  };

function ReadProduceModal() {

    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    return ( 
        <div>
<Tooltip title="פתח נוהל">
        <DraftsSharp fontSize="medium" onClick={handleOpen} />
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ReadProduceForm />
        </Box>
      </Modal>

        </div>
     );
}

export default ReadProduceModal;