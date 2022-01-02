import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImportentProduces from "./Tabels/ImportentProduces";
import RegularProduces from "./Tabels/RegularProduces";
import OtherTables from "./Tabels/OtherTables";

function Body() {
  return (
    <div className="div-body" dir="rtl">
      <Container className="con-body">
        <Row className="row-body">
          <Col>
            {/* ------------- Produce Table ------------------ */}
            <div className="table-component">
              <ImportentProduces />
            </div>
            <div className="table-component">
              <RegularProduces />
            </div>
            <div className="table-component">
              <OtherTables />
            </div>
            {/* ------------- /Produce Table ------------------ */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
