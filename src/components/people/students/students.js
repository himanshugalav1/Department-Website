import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"
import btechimg from "../../../assets/img/custom/student/btech.jpg"
import mtechimg from "../../../assets/img/custom/student/mtech.jpg"
import msimg from "../../../assets/img/custom/student/ms.jpg"
import phdimg from "../../../assets/img/custom/student/phd.jpg"

export default function students() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Students</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
          <Col style={{ xs:'auto', position: 'relative', maxWidth: '500px' }}>
              <img src={btechimg} alt="some img" style={{ width: '550px', height: '380px', transform: 'scale(0.8)', borderRadius: '5px' }} />
              <div className='studentText'>
                <h4>B.TECH.</h4>
              </div>
          </Col>
          <Col style={{ xs:'auto', position: 'relative', maxWidth: '500px' }}>
              <img src={mtechimg} alt="some img" style={{ width: '550px', height: '380px', transform: 'scale(0.8)', borderRadius: '5px' }} />
              <div className='studentText'>
                <h4>M.TECH.</h4>
              </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <Col style={{ xs:'auto', position: 'relative', maxWidth: '500px' }}>
              <img src={msimg} alt="some img" style={{ width: '550px', height: '380px', transform: 'scale(0.8)', borderRadius: '5px' }} />
              <div className='studentText'>
                <h4>M.S.</h4>
              </div>
          </Col>
          <Col style={{ xs:'auto', position: 'relative', maxWidth: '500px' }}>
              <img src={phdimg} alt="some img" style={{ width: '550px', height: '380px', transform: 'scale(0.8)', borderRadius: '5px' }} />
              <div className='studentText'>
                <h4>PH.D.</h4>
              </div>
          </Col>
        </Row>

      </Container >
    </Container >
  );
}
