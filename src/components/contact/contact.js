import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import strip from "../../assets/img/heading_main_border.png"

export default function ContactPage() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <h1 style={{ textAlign: "center" }}>Contact Us</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col style={{ justifyContent: "left" }}>
            <GoLocation style={{ marginRight: '5px', marginBottom: '2px' }} />
            <span > EE-Office, Department of Electrical Engineering, J.C.Block, IIT Ropar, Rupnagar, Punjab, 140001 </span>
          </Col>
        </Row>

        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col style={{ justifyContent: "left" }}>
            <HiOutlineMail style={{ marginRight: '5px', marginBottom: '2px' }} />
            <span datatype='email'> eeoffice@iitrpr.ac.in </span>
          </Col>
        </Row>

        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col style={{ justifyContent: "left" }}>
            <FaPhone style={{ marginRight: '5px', marginBottom: '2px' }} />
            <span datatype='phone'> +91-1881-232202 </span>
          </Col>
        </Row>

        <Row style={{ justifyContent: "left", padding: "10px", marginTop:"50px" }}>
          <div className="map-section">
            <iframe
              title="IIT Ropar EE Block Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13798.845075869457!2d76.5258945!3d30.948496449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a945cbfbb16a9%3A0x22e4281b7bfc11b6!2sIndian%20Institute%20of%20Technology%20Ropar!5e0!3m2!1sen!2sin!4v1635282936227!5m2!1sen!2sin"
              width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy">
              </iframe>
          </div>
        </Row>
      </Container >
    </Container >
  );
}
