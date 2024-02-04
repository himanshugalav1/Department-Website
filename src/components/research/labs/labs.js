import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"

export default function labs() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Laboratories</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        {/* Power Electronics */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h3 style={{ textAlign: "center", backgroundColor: "rgba(0, 33, 71, 0.7)", padding: '10px 0px 10px 0px', borderRadius: "5px" }}>
            <span>
              Power Engineering
            </span>
          </h3>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: '40px' }}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Lab Name</th>
              <th>Associated Faculty</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Electric Machines (UG)</td>
              <td>Room No. : 101, Ground Floor</td>
              <td>Dr. Saifullah Payami</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>High Voltage (PG)</td>
              <td>Room No. : 102, Ground Floor</td>
              <td>Dr. C.C. Reddy</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Power Electronics (UG+ PG)</td>
              <td>Room No. : 104, Ground Floor</td>
              <td>Dr. R Sekhar</td>
            </tr>
          </tbody>
        </Table>

        {/* Signal Processing and Communications Courses */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h3 style={{ textAlign: "center", backgroundColor: "rgba(0, 33, 71, 0.7)", padding: '10px 0px 10px 0px', borderRadius: "5px" }}>
            <span>
              Signal Processing and Communications 
            </span>
          </h3>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: "40px" }}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Lab Name</th>
              <th>Associated Faculty</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Electric Machines (UG)</td>
              <td>Room No. : 206, First Floor</td>
              <td>Dr. J.S. Sahambi</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>High Voltage (PG)</td>
              <td>Room No. : 207, First Floor</td>
              <td>Dr. Ravibabu</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Power Electronics (UG+ PG)</td>
              <td>Room No. : 301, Second Floor</td>
              <td>Dr. Suman Kumar</td>
            </tr>
          </tbody>
        </Table>



      </Container >
    </Container >
  );
}
