import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"

export default function ms() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>M.S. Courses</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

        <Row >
          <Col className='btechcol' xs={3} md={2} lg={2} style={{marginLeft:'10px'}}><h5>Code</h5></Col>
          <Col className='btechcol'><h5>Course Name</h5></Col>
          <Col className='btechcol' xs={3} md={2} lg={2} style={{marginRight:'60px'}}><h5>L-T-P-S-C</h5></Col>
        </Row>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol' xs={3} md={2} lg={2}>EE201</Col>
              <Col className='btechcol'>Signals And Systems</Col>
              <Col className='btechcol' xs={3} md={2} lg={2}>3-1-0-5-3</Col>
            </Accordion.Header>
            <Accordion.Body>
              Classification of signals and systems, various system representation techniques, differential, difference and state-space
              representations, Fourier transforms and series, application to analysis of systems, Laplace transform, its properties,
              and its application to system analysis,Sampling of continuous signals and sampling theorem, Z-transforms, its properties
              and applications, Random variables and random process, characterization of random variables and random process, linear
              systems and random signals.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol' xs={3} md={2} lg={2}>EE203</Col>
              <Col className='btechcol'>Digital Circuits</Col>
              <Col className='btechcol' xs={3} md={2} lg={2}>3-1-0-5-3</Col>
            </Accordion.Header>
            <Accordion.Body>
              Introduction to binary arithmetic, Boolean algebra, K-maps and logic gates: Number base conversion, theorems on Boolean algebra, simplification of Boolean functions using K-maps, logic gates and their applications Design of combinational circuits: Design of basic combinational circuits including adders, subtractors, encoders, decoders, multiplexers/de-multiplexers, encoders/decoders, code convertors. Design of sequential circuits: Design of basic memory circuits (latch), flip-flops, counters, and shift registers. Introduction to digital logic families: Study of DTL, TTL, ECL, CMOS, BiCMOS logic families. Data processing and conversion: Sample and hold circuits, ADCs and DACs; Basic memory circuits ROM, RAM and PLA.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol' xs={3} md={2} lg={2}>EE204</Col>
              <Col className='btechcol'>Digital Circuits Lab</Col>
              <Col className='btechcol' xs={3} md={2} lg={2}>0-0-3-3-1.5</Col>
            </Accordion.Header>
            <Accordion.Body>
              Implementation of digital logic using switching circuits, Study of universal gates, Design of a 1-bit Full Adder/Subtractor using logic gates, Design and implementation of a 4-bit binary ripple, adder using logic gates, 4 X 3 bit binary multiplier using logic gates, Review of lab projects, Mid semester exam, Study of code converters. (BCD to excess-3, binary, to gray and gray to binary), Study of combinational MSI circuits – 1-bit half/full, adder, 1-bit half/full subtractor and 1-bit magnitude, comparator, Study of sequential circuits – Implementation of Flip-Flops, Design of a synchronous decade counter, Design of 4-bit parallel input serial output (PISO), shift-register, End semester exam, Final demonstration of lab projects                  </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" style={{ backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
            <Accordion.Header>
              <Col className='btechcol' xs={3} md={2} lg={2}>EE205</Col>
              <Col className='btechcol'>Electromechanics</Col>
              <Col className='btechcol' xs={3} md={2} lg={2}>3-1-0-5-3</Col>
            </Accordion.Header>
            <Accordion.Body>
            Transformer and its applications, General features, of polyphase AC machines, The polyphase induction machine The polyphase synchronous machine, The single phase motor, The stepper motors, The DC machine.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


      </Container >
    </Container >
  );
}
