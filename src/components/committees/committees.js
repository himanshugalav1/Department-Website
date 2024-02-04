import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import strip from "../../assets/img/heading_main_border.png"

export default function committees() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Departmental committees</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        {/* B.Tech. Faculty Advisors */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h3 style={{ textAlign: "center", backgroundColor: "rgba(0, 33, 71, 0.7)", padding: '10px 0px 10px 0px', borderRadius: "5px" }}>
            <span>
              B.Tech. Faculty Advisors
            </span>
          </h3>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: '40px' }}>
          <thead>
            <tr>
              <th>Batch	</th>
              <th>Advisor Name</th>
              <th>Email	</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023 </td>
              <td>Dr. Suman Kumar	</td>
              <td>suman@iitrpr.ac.in	</td>
              <td>01881-232225</td>
            </tr>
            <tr>
              <td>2022	</td>
              <td>Dr. K. Ramachandra Sekhar	</td>
              <td>sekhar@iitrpr.ac.in	</td>
              <td>01881-232215</td>
            </tr>
            <tr>
              <td>2021	</td>
              <td>Dr. Pardeep Duhan	</td>
              <td>pduhan@iitrpr.ac.in	</td>
              <td>01881-232228</td>
            </tr>
            <tr>
              <td>2020	</td>
              <td>Dr. Mahendra Sakare	</td>
              <td>mahendra@iitrpr.ac.in	</td>
              <td>01881-232214</td>
            </tr>
          </tbody>
        </Table>

        {/* B.Tech. Artificial Intelligence and Data Enginerring (AIDE) Faculty Advisors */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <h3 style={{ textAlign: "center", backgroundColor: "rgba(0, 33, 71, 0.7)", padding: '10px 0px 10px 0px', borderRadius: "5px" }}>
            <span>
            B.Tech. Artificial Intelligence and Data Enginerring (AIDE) Faculty Advisors
            </span>
          </h3>
        </Row>

        <Table striped bordered hover variant="dark" style={{ justifyContent: 'center', margin: 'auto', width: '80%', marginBottom: '40px' }}>
          <thead>
            <tr>
              <th>Batch	</th>
              <th>Advisor Name</th>
              <th>Email	</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023 </td>
              <td>Dr. Suman Kumar	</td>
              <td>suman@iitrpr.ac.in	</td>
              <td>01881-232225</td>
            </tr>
            <tr>
              <td>2022	</td>
              <td>Dr. K. Ramachandra Sekhar	</td>
              <td>sekhar@iitrpr.ac.in	</td>
              <td>01881-232215</td>
            </tr>
            <tr>
              <td>2021	</td>
              <td>Dr. Pardeep Duhan	</td>
              <td>pduhan@iitrpr.ac.in	</td>
              <td>01881-232228</td>
            </tr>
            <tr>
              <td>2020	</td>
              <td>Dr. Mahendra Sakare	</td>
              <td>mahendra@iitrpr.ac.in	</td>
              <td>01881-232214</td>
            </tr>
          </tbody>
        </Table>


      </Container >
    </Container >
  );
}
