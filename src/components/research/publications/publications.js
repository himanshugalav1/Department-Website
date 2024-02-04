import * as React from 'react';
import { Container, Row } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"
import { Tabs, Tab } from 'react-bootstrap';

function Publications() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>List of Publications</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3 pubstab" fill>
          <Tab eventKey="All" title={<span style={{ color: 'white' }}>All</span>}>
            <div className="card">
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <h5 className="card-title">Experimental Investigations on Remote Measurement of HV Electrode Current</h5>
                    <p className="card-text">S. Arshdeep, B. Singh and C.C.Reddy</p>
                  </div>
                  <div style={{ flex: 1, textAlign: 'right' }}>
                    <p className="card-text">2018 Conference</p>
                  </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <p className="card-text" style={{ color: 'grey' }}>2018 IEEE 13th International Conference on Industrial and Information Systems (ICIIS), Rupnagar, India, 2018, pp. 418-421.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <h5 className="card-title">Experimental Investigations on Remote Measurement of HV Electrode Current</h5>
                    <p className="card-text">S. Arshdeep, B. Singh and C.C.Reddy</p>
                  </div>
                  <div style={{ flex: 1, textAlign: 'right' }}>
                    <p className="card-text">2018 Conference</p>
                  </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <p className="card-text" style={{ color: 'grey' }}>2018 IEEE 13th International Conference on Industrial and Information Systems (ICIIS), Rupnagar, India, 2018, pp. 418-421.</p>
                </div>
              </div>
            </div>

          </Tab>
          <Tab eventKey="2022" title={<span style={{ color: 'white' }}>2022</span>}>
            <div className="card">
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <h5 className="card-title">Experimental Investigations on Remote Measurement of HV Electrode Current</h5>
                    <p className="card-text">S. Arshdeep, B. Singh and C.C.Reddy</p>
                  </div>
                  <div style={{ flex: 1, textAlign: 'right' }}>
                    <p className="card-text">2018 Conference</p>
                  </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <p className="card-text" style={{ color: 'grey' }}>2018 IEEE 13th International Conference on Industrial and Information Systems (ICIIS), Rupnagar, India, 2018, pp. 418-421.</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <h5 className="card-title">Experimental Investigations on Remote Measurement of HV Electrode Current</h5>
                    <p className="card-text">S. Arshdeep, B. Singh and C.C.Reddy</p>
                  </div>
                  <div style={{ flex: 1, textAlign: 'right' }}>
                    <p className="card-text">2018 Conference</p>
                  </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <p className="card-text" style={{ color: 'grey' }}>2018 IEEE 13th International Conference on Industrial and Information Systems (ICIIS), Rupnagar, India, 2018, pp. 418-421.</p>
                </div>
              </div>
            </div>

          </Tab>
          <Tab eventKey="2021" title={<span style={{ color: 'white' }}>2021</span>}>
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="2020" title={<span style={{ color: 'white' }}>2020</span>}>
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="2019" title={<span style={{ color: 'white' }}>2019</span>}>
            Tab content for Loooonger Tab
          </Tab>
        </Tabs>

      </Container >
    </Container >
  );
}

export default Publications;