import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"

export default function facilities() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Research Facilities</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom:'50px' }}>
          <Col style={{ justifyContent: "center", textAlign: 'center' }}>
            <span>
              The Department undertakes a continuous process of setting up experimental and computational facilities for taking up research & development and consultancy activities in various fields as also to produce state-of-the-art research output. There are several advanced Research Labs available in the Department which ensure the best and accurate Research work is obtained from the student as well as the faculty members.
            </span>
          </Col>
        </Row>

        {/* Power Engineering Labs */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h5 style={{ textAlign: "center" }}>
            <span style={{ backgroundColor: "rgba(0, 33, 71, 0.7)", padding: "5px 20px 5px 20px", borderRadius: "5px" }}>
            Power Engineering Labs
            </span>
          </h5>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: '50px' }}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Lab Name</th>
              <th>Faculty Incharge</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Dielectric Measurements Lab</td>
              <td>Dr. C C Reddy</td>
              <td><a href='https://www.iitrpr.ac.in/ee/reddy'>Click here</a></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Electric Drives and Renewable Energy Lab</td>
              <td>Dr. A V Ravi Teja</td>
              <td><a href='https://www.iitrpr.ac.in/electrical/avraviteja'>Click here</a></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Electric Machine Design and Drives Lab</td>
              <td>Dr. Saifullah Payami</td>
              <td><a href='https://www.iitrpr.ac.in/ee/saifullah'>Click here</a></td>
            </tr>
          </tbody>
        </Table>

        {/* Signal Processing and Communications Labs */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h5 style={{ textAlign: "center" }}>
            <span style={{ backgroundColor: "rgba(0, 33, 71, 0.7)", padding: "5px 20px 5px 20px", borderRadius: "5px" }}>
            Signal Processing and Communications Labs
            </span>
          </h5>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: '50px' }}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Lab Name</th>
              <th>Faculty Incharge</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>AMR Lab: Antenna and Microwave Research Lab</td>
              <td>Dr. Ashwani Sharma</td>
              <td><a href='https://sites.google.com/iitrpr.ac.in/ashwani-sharma/'>Click here</a></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Communication Research Lab</td>
              <td>Dr. Sam Darshi & Dr. Brijesh Kumbhani</td>
              <td><a href='https://www.iitrpr.ac.in/electrical/cmr'>Click here</a></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Computer Vision & Pattern Recognition Lab</td>
              <td>Dr. Subrahmanyam Murala and Dr. Santosh K Vipparthi</td>
              <td><a href='https://iitrpr.cvpr.in/'>Click here</a></td>
            </tr>
          </tbody>
        </Table>


      </Container >
    </Container >
  );
}
