import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Ni from "../images/natural.png";

function CustomDesign() {
  return (
    <Container fluid className="mt-5 mb-5">
      <Row>
        <Col
          md={4}
          className="d-flex flex-column justify-content-center align-items-start pl-5"
        >
          <Row
    className="pl-5 border w-100 mt-0 d-flex align-items-center"
    style={{ height: "60%" }}
>
    <h1>THE POWER OF NATURE</h1>
</Row>

          <Row>
            <p className="text-left mt-4 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Cras rutrum iaculis enim, non convallis felis mattis at.
            </p>
          </Row>
          <Row className="mt-3">
            <Button variant="dark">Learn more</Button>
          </Row>
        </Col>
        <Col md={8} className="d-flex flex-wrap justify-content-end pr-5">
          <img src={Ni} alt="Description" className="img-fluid mb-2" />
        </Col>
      </Row>
    </Container>
  );
}

export default CustomDesign;
