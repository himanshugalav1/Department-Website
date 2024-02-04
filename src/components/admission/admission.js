import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import strip from "../../assets/img/heading_main_border.png"

export default function admission() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Admission Crieteria & Eligibility</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: '50px' }}>
          <Col style={{ justifyContent: "center", textAlign: 'center' }}>
            <span>
              Department imparts the knowledge in three programs, a Bachelors programme with a total intake of 60 students per academic year, a Master of Technology and a Doctoral (Ph.D.) programme to upskill technical and research excellence in specialized avenues of Electrical Engineering.            </span>
          </Col>
        </Row>

        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol'><h4>Bachelor of Technology (B. Tech.)</h4></Col>
            </Accordion.Header>
            <Accordion.Body>
              IIT Ropar currently offers a 4-year B. Tech. programme in Electrical Engineering. The admission to all these courses is through the IIT Joint Entrance Examination (JEE).
              For more information about JEE, please visit: <a href='http://www.jeeadv.ac.in/'>Click here</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol'><h4>Bachelor of Technology (B. Tech.) Engineering Physics (Jointly offered with Physics)</h4></Col>
            </Accordion.Header>
            <Accordion.Body>
              To be Updated
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol'><h4>Bachelor of Technology (B. Tech.) AIDE (Jointly offered with CSE and CARDS)</h4></Col>
            </Accordion.Header>
            <Accordion.Body>
              To be Updated
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol'><h4>Master of Technology (M. Tech.)</h4></Col>
            </Accordion.Header>
            <Accordion.Body>
              To be Updated
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol'><h4>Master of Science (M. S.)</h4></Col>
            </Accordion.Header>
            <Accordion.Body>
              To be Updated
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol'><h4>Doctor of Philosophy (Ph. D.)</h4></Col>
            </Accordion.Header>
            <Accordion.Body>
              Eligibility Criteria : Candidates having M.Tech./M.E./M.S. in Electrical engineering or equivalent degree with 60% marks (or 6.5 grade point out of 10) are eligible to apply.
              The Department currently has the following Research Areas:
              <ol>
                <li>Renewable Energy</li>
                <li>Communication</li>
                <li>Infrared Imaging</li>
                <li>Non-destructive Testing</li>
                <li>Computer Vision and Deep Learning</li>
                <li>Machine Learning</li>
                <li>Signal and Image processing</li>
                <li>Power Systems</li>
                <li>Nano-Optics and Photonics</li>
                <li>High Voltage Power Equipment</li>
                <li>Nano-Dielectrics</li>
                <li>Space Charges in Dielectrics</li>
                <li>High-speed interconnect design for on-chip and chip-chip applications</li>
                <li>Low-power communication networks for multi-core architecture</li>
                <li>Development and applications of novel materials for high-speed circuits.</li>
                <li>In addition, candidates are advised to see faculty profiles and research areas for further details/areas. Notification will be issued from time to time by IIT Ropar. Please visit the following link for latest notification and other information.</li>
              </ol>
              <a href='https://www.iitrpr.ac.in/current-admissions/'>Click to view</a> (Please follow special notifications, if any, on PhD program, like, Visvesvarayya PhD Program, etc.)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


      </Container >
    </Container >
  );
}
