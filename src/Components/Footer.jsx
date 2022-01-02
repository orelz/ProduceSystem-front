import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className= "div-footer">
      <Container className="con-footer">
        <Row className="row-footer">
          <Col>כל הזכויות שמורות - אגף תביעות בריאות</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;