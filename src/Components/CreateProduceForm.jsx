import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

function CreateProduceForm() {
  return (
    <div className="div-body">
      <Container className="con-body text-center">
        <Row className="row-body">
          <Col>
            <Form>
              <h2 className="form-title-page">הוספת נוהל חדש</h2>
              <Row className="form-row">
                <Form.Label column="sm" lg={2}>
                  שם הנוהל
                </Form.Label>
                <Col>
                  <Form.Control size="sm" type="text" className="form-input" />
                </Col>
              </Row>

              <Row className="form-row">
                <Form.Label column="sm" lg={2}>
                  מחבר הנוהל
                </Form.Label>
                <Col>
                  <Form.Control size="sm" type="text" className="form-input" />
                </Col>
              </Row>

              <Row className="form-row">
                <Form.Label column="sm" lg={2}>
                  סוג הנוהל
                </Form.Label>
                <Col>
                  <Form.Select size="sm" className="form-select">
                    <option>בחר</option>
                    <option>ניהולי</option>
                    <option>רפואי</option>
                    <option>ארכיון נהלים</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="form-row">
                <Form.Label column="sm" lg={2}>
                  סטטוס
                </Form.Label>
                <Col>
                  <Form.Select size="sm" className="form-select">
                    <option>בחר</option>
                    <option>גלוי</option>
                    <option>נסתר</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className="form-row">
                <Form.Label column="sm" lg={2}>
                  נוהל נעוץ?
                </Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label="כן"
                    id=""
                    className="form-checkbox"
                  />
                  <Form.Check
                    type="radio"
                    label="לא"
                    id=""
                    className="form-checkbox"
                  />
                </Col>
              </Row>

              <Form.Label column="sm" lg={2}>
                תוכן הנוהל
              </Form.Label>
              <Col>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  className="form-textarea text-center"
                >
                  <Form.Control as="textarea" />
                </FloatingLabel>
              </Col>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateProduceForm;
