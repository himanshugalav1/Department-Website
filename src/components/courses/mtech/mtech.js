import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"

export default function mtech() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Mtech Courses</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        {/* Power Electronics */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h3 style={{ textAlign: "center", backgroundColor: "rgba(0, 33, 71, 0.7)", padding: '10px 0px 10px 0px', borderRadius: "5px" }}>
            <span>
              Power Engineering Courses
            </span>
          </h3>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: '40px' }}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>L-T-P-S-C</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EE511</td>
              <td>HV Power Equipment</td>
              <td>3-0-0-6-3</td>
              <td>I</td>
            </tr>
            <tr>
              <td>EE513</td>
              <td>Simulation & Analysis of Modern Power Systems	</td>
              <td>3-0-4-8-5</td>
              <td>I</td>
            </tr>
            <tr>
              <td>EE515	</td>
              <td>Power Converter Analysis & Design	</td>
              <td>3-0-0-6-3</td>
              <td>I</td>
            </tr>
          </tbody>
        </Table>

        {/* Elective Courses */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h5 style={{ textAlign: "center" }}>
            <span style={{ backgroundColor: "rgba(0, 33, 71, 0.7)", padding: "5px 20px 5px 20px", borderRadius: "5px" }}>
              List of Elective Courses
            </span>
          </h5>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: '50px' }}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>L-T-P-S-C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EE601</td>
              <td>Synchrophasor Technology & ITS Applications in Power</td>
              <td>3-0-0-6-3</td>
            </tr>
            <tr>
              <td>EE605</td>
              <td>Fundamentals of Power System Operation under Restructured</td>
              <td>3-0-0-6-3</td>
            </tr>
            <tr>
              <td>EE606</td>
              <td>Optimization and control of Power System Operation</td>
              <td>3-0-0-6-3</td>
            </tr>
          </tbody>
        </Table>


        {/* Signal Processing and Communications Courses */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h3 style={{ textAlign: "center", backgroundColor: "rgba(0, 33, 71, 0.7)", padding: '10px 0px 10px 0px', borderRadius: "5px" }}>
            <span>
              Signal Processing and Communications Courses
            </span>
          </h3>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: "40px" }}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>L-T-P-S-C</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EE511</td>
              <td>HV Power Equipment</td>
              <td>3-0-0-6-3</td>
              <td>I</td>
            </tr>
            <tr>
              <td>EE513</td>
              <td>Simulation & Analysis of Modern Power Systems	</td>
              <td>3-0-4-8-5</td>
              <td>I</td>
            </tr>
            <tr>
              <td>EE515	</td>
              <td>Power Converter Analysis & Design	</td>
              <td>3-0-0-6-3</td>
              <td>I</td>
            </tr>
          </tbody>
        </Table>

        {/* Elective Courses */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h5 style={{ textAlign: "center" }}>
            <span style={{ backgroundColor: "rgba(0, 33, 71, 0.7)", padding: "5px 20px 5px 20px", borderRadius: "5px" }}>
              List of Elective Courses
            </span>
          </h5>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: "50px" }}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Name</th>
              <th>L-T-P-S-C</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EE601</td>
              <td>Synchrophasor Technology & ITS Applications in Power</td>
              <td>3-0-0-6-3</td>
            </tr>
            <tr>
              <td>EE605</td>
              <td>Fundamentals of Power System Operation under Restructured</td>
              <td>3-0-0-6-3</td>
            </tr>
            <tr>
              <td>EE606</td>
              <td>Optimization and control of Power System Operation</td>
              <td>3-0-0-6-3</td>
            </tr>
          </tbody>
        </Table>



      </Container >
    </Container >
  );
}
