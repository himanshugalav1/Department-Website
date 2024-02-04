import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import strip from "../../assets/img/heading_main_border.png"

function Addpubs() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div className='card' style={{ margin: '50px auto', padding: '50px', maxWidth: '600px', backgroundColor: 'rgb(0, 0, 0, 0.4)', color: 'white' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Enter the publication details</h3>
          <Form>
            <Row className="mb-3">
              <Form.Group controlId="formGridEmail" style={{ marginBottom: '20px' }}>
                <Form.Label>Publication Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
              </Form.Group>

              <Form.Group controlId="formGridPassword" style={{ marginBottom: '20px' }}>
                <Form.Label>Professor</Form.Label>
                <Form.Control type="text" placeholder="Professor Name" />
              </Form.Group>

              <Form.Group controlId="formGridPassword" style={{ marginBottom: '20px' }}>
                <Form.Label>Conference Year</Form.Label>
                <Form.Control type="date" placeholder="Year" />
              </Form.Group>

              <Form.Group controlId="formGridPassword" style={{ marginBottom: '20px' }}>
                <Form.Label>Publication Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Type" />
              </Form.Group>

              <Form.Group controlId="formGridPassword" style={{ marginBottom: '20px' }}>
                <Form.Label>Conference Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" />
              </Form.Group>

            </Row>

            <div style={{ textAlign: 'center' }}>
              <Button variant="primary" type="submit" style={{ backgroundColor: 'rgb(1, 1, 59)', border: 'white 0.5px solid', padding: '1px 25px 1px 25px' }}>
                <h4>Submit</h4>
              </Button>
            </div>
          </Form>
        </div>

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <h2 style={{ textAlign: "center" }}>OR</h2>
          <img src={strip} style={{ alignContent: "center", width: "150px", height: "4px" }}></img>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: '50px' }}>
          <Col style={{ justifyContent: "center", textAlign: 'center' }}>
            <Row style={{ justifyContent: "left", padding: "10px" }}>
              <Col style={{textAlign:'right', marginTop:'10px'}}><h4>Use Sheet to Add publication:</h4></Col>
              <Col style={{ justifyContent: "left", textAlign:'left' }}>
                <Button className='homebtn' variant="primary" style={{ fontSize: "1.2rem", padding: "10px 50px 10px 50px" }}>
                   <a href='https://docs.google.com/spreadsheets/d/1ZDAs8aCK_tKNbSXT1UzegaV4z814BN079oGbYpdRG5s/edit?usp=sharing'>Open Sheet</a> 
                   </Button>{' '}
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Addpubs;
