import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Ni from "../images/natural.png";

function Natural() {
    return (
        <Container fluid className="mt-5">
            <Row>
                {/* Left Column */}
                <Col md={4} className="d-flex flex-column justify-content-center align-items-start pl-5">
                <h1 className="mb-1 border">
    THE POWER OF NATURE
</h1>
                    <p className="text-left mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at.</p>
                    <Button variant="dark">Learn more</Button>
                </Col>

                {/* Right Column */}
                <Col md={8} className="d-flex flex-wrap justify-content-end pr-5">
                    <img src={Ni} alt="Natural" className="img-fluid" />

                </Col>
            </Row>
        </Container>
    );
}

export default Natural;
