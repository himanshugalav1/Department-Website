import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"

export default function areas() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Research Areas</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Row style={{backgroundColor:'rgba(1, 1, 50, 0.6)', borderRadius:'8px'}}>
        <Row style={{ justifyContent: "center", padding: "10px", paddingTop:'30px' }}>
          <Col style={{ justifyContent: "center", textAlign:'center' }}>
            <span > The Faculty members of the department are currently active in various research areas, listed as under:</span>
          </Col>
        </Row>

        <Row className="arearow">
          <Col style={{ justifyContent: 'center' }}>
            <ol>
              <li>Renewable Energy</li>
              <li>Power Systems</li>
              <li>High Voltage Engineering</li>
              <li>Space Charges in Dielectrics</li>
              <li>Communication</li>
              <li>Low-power communication networks for multi-core architecture</li>
              <li>Development and applications of novel materials for high-speed circuits.</li>
              <li>Signal and Image processing</li>
              <li>Infrared Imaging</li>
              <li>Non-destructive Testing</li>
              <li>Computer Vision</li>
              <li>Medical Image Processing</li>
              <li>Deep Learning</li>
              <li>Nano-Optics and Photonics</li>
              <li>Nano-Dielectrics</li>
              <li>Analog, RF and Mixed Signal VLSI Circuits and Systems</li>
              <li>High-speed interconnect design for on-chip and chip-chip applications</li>
              <li>Nanoelectronics</li>
              <li>Device Relaibility</li>
              <li>Semiconductor Devices</li>
            </ol>
          </Col>
        </Row>
        </Row>

      </Container >
    </Container >
  );
}
