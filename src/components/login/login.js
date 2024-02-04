import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the Node.js API using axios
      const response = await axios.post('http://localhost:8080/register', {
        email,
        password,
      });

      console.log(response.data);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <Container fluid className="about-section">
      <Container>
        <div className='card' style={{ margin: '50px auto', padding: '50px', maxWidth: '600px', backgroundColor:'rgb(0, 0, 0, 0.4)', color:'white'}}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Enter your Credentials to add a publication</h3>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group controlId="formGridEmail" style={{marginBottom:'20px'}}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group  controlId="formGridPassword" style={{marginBottom:'20px'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
            </Row>

            <div style={{ textAlign: 'center' }}>
              <Button variant="primary" type="submit" style={{backgroundColor:'rgb(1, 1, 59)', border:'white 0.5px solid', padding:'1px 25px 1px 25px'}}>
              <h4>Submit</h4>
              </Button>
            </div>
          </Form>

        </div>
      </Container>
    </Container>
  );
}

export default LoginForm;
