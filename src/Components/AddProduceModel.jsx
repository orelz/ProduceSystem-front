import React from "react";
import { Button, Modal } from "react-bootstrap";
import CreateProduceForm from "./CreateProduceForm";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      className="modal-form"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <CreateProduceForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AddProduceModel() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        הוסף נוהל חדש
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AddProduceModel;
