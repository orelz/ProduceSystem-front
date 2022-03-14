import { Box, Modal, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import AddProduceForm from "../Forms/AddProduceForm"
import { AddBox } from "@material-ui/icons";
import Test from "../Forms/Test";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 920,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
  borderRadius: "25px",
};

function ModalAddProduce(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <div>
      <Tooltip title="הוספת נוהל חדש">
        <AddBox fontSize="large" onClick={handleOpen} />
      </Tooltip>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <AddProduceForm className="test" onCloseModal={closeModal} updateTablesStateHandler ={props.updateTablesStateHandler}/>
          {/* <Test /> */}
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAddProduce;
