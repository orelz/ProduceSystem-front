import { Box, Container } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import ModalAddProduce from "./Forms/ModalAddProduce";

function Header() {
  return (
    <div className="div-header">
      <Container className="con-header">
        <Box sx={{backgroundColor:"#0d21a1"}}>
          <Col>מערכת נהלים- מחלקת ניתוחים</Col>
          <ModalAddProduce />
        </Box>
      </Container>
    </div>
  );
}

export default Header;
