import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"

export default function projects() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Research Projects</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '95%', marginBottom: '40px' }}>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Funding Agency</th>
              <th>Associated Faculty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sensorless Control of Switched Reluctance Motor Drives for Electric Vehicle Applications.	</td>
              <td>SERB-SRG	</td>
              <td>Dr. A. V. Ravi Teja</td>
            </tr>
            <tr>
              <td>Experimental Investigations on Breakdown Phenomenon In power Cable.	</td>
              <td>DST	</td>
              <td>Dr. C C Reddy</td>
            </tr>
            <tr>
              <td>Design and Development of Compact Firing Circuit.	</td>
              <td>DRDO	</td>
              <td>Dr. C C Reddy</td>
            </tr>
            <tr>
              <td>Investigations on new nano-composite materials for electrical insulation.	</td>
              <td>CPRI	</td>
              <td>Dr. C C Reddy</td>
            </tr>
            <tr>
              <td>Evaluation of 11Kv Earthed HT Xlpe Cable Conductor Resistance and High Voltage Performance as per IS7098 part-II.	</td>
              <td>Industrial Consultancy	</td>
              <td>Dr. C C Reddy</td>
            </tr>
            <tr>
              <td>Transition Joint : Material, Interfacial.	</td>
              <td>Industrial Consultancy	</td>
              <td>Dr. C C Reddy</td>
            </tr>
          </tbody>
        </Table>



      </Container >
    </Container >
  );
}
