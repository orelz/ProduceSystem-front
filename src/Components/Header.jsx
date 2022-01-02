import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddProduceModel from "./AddProduceModel";
import ModalTest from "./Forms/ModalTest";

function Header() {
  return (
    <div className="div-header">
      <Container className="con-header">
        <Row className="row-header">
          <Col>מערכת נהלים- מחלקת ניתוחים</Col>
          {/* <AddProduceModel className="add-produce-button" /> */}
          <ModalTest />
        </Row>
      </Container>
    </div>
  );
}

export default Header;
