import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import iitropar from "../../assets/img/ropar.jpg";
import eedept from "../../assets/img/img7.png";
import strip from "../../assets/img/heading_main_border.png"



export default function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
            Welcome to Department of Electrical Engineering
          </h1>

        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <img src={iitropar} alt="about" style={{ width: "70%", height: "30%" }} className="img-fluid" />
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Department imparts the knowledge in three programs, a Bachelors programme with a total intake of 60 students per academic year, a Master of Technology and a Doctoral (Ph.D.) programme to upskill technical and research excellence in specialized avenues of Electrical Engineering.
                    Faculty members of the department are active in several research areas, such as; Renewable Energy, Communication, Signal and Image processing, Power Systems, High Voltage Engineering, Nano-Dielectrics, Space Charges in Dielectrics, interconnect design for chips, multi-core architecture, materials for high-speed circuits, Analog, RF and Mixed-Signal VLSI Circuits and Systems, Computer Vision, Deep Learning and Medical Image Processing.
                  </p>
                  <h2>Objectives</h2>
                  <ul>
                    <li>To upskill the undergraduate and postgraduate students in Electrical Engineering.</li>
                    <li>To come up with excellent research in broad areas of Electrical Engineering.</li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>
    </Container>
  );
}

