import {
  Box,
  Modal,
  Tooltip,
} from "@material-ui/core";
import React, { useState } from "react";
import { EditSharp } from "@material-ui/icons";
import EditProduceForm from "../Forms/EditProduceForm";

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

function ModalEditProduce() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div>
      <Tooltip title="עדכון נוהל">
        <EditSharp fontSize="medium" onClick={handleOpen} />
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditProduceForm className="test" onCloseModal={closeModal} />
        </Box>
      </Modal>
    </div>
  );
}

export default ModalEditProduce;
