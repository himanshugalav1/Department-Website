import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import strip from "../../assets/img/heading_main_border.png"
import backimg from "../../assets/img/ropar.jpg"
import Button from 'react-bootstrap/Button';
import About from '../about/about';
import Card from 'react-bootstrap/Card';
import documen from '../../assets/img/custom/landing/menu/documents.png'
import patent from '../../assets/img/custom/landing/menu/patent.png'
import profit from '../../assets/img/custom/landing/menu/profit.png'
import project from '../../assets/img/custom/landing/menu/project.png'
import Carousel from 'react-bootstrap/Carousel';
import news1 from '../../assets/img/custom/landing/news/3/test3.jpg'
import news2 from '../../assets/img/custom/landing/news/1/rsfday.jpg'

export default function home() {
  return (
    <header>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${backimg})`, height: 700, marginTop: 50 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', marginTop: "120px", height: "250px", alignContent: "start" }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Department of Electrical Engineering</h1>
              <h4 className='mb-3'>Indian Institute of Technology Ropar</h4>
              {/* <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                  Call to action
                </a> */}
            </div>
          </div>
        </div>
      </div>

      <Container fluid className="about-section">
        <Container>

          {/* Welcome */}

          <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
            <h1 style={{ textAlign: "center" }}>Welcome to Department of Electrical Engineering</h1>
            <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
          </Row>

          <Row style={{ justifyContent: "left", padding: "10px" }}>
            <Col style={{ justifyContent: "left" }}>
              <span > Department imparts the knowledge in three programs, a Bachelors programme with a total intake of 60 students
                per academic year, a Master of Technology and a Doctoral (Ph.D.) programme to upskill technical and research
                excellence in specialized avenues of Electrical Engineering. </span>
            </Col>
          </Row>

          <Row style={{ justifyContent: "left", padding: "10px" }}>
            <Col style={{ justifyContent: "left" }}>
              <Button className='homebtn' variant="primary" style={{ fontSize: "1.2rem", padding: "10px 50px 10px 50px" }} onClick={About}> Read More </Button>{' '}
            </Col>
          </Row>


          {/* Research Highlights */}

          <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px", marginTop: "30px" }}>
            <h1 style={{ textAlign: "center" }}>Research Highlights</h1>
            <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
          </Row>

          <div className="container text-center">
            <div className="row">
              <div className="col">
                <Card style={{ width: '15rem', height: '20rem' }}>
                  <Card.Img variant="top" src={documen} style={{ width: '11rem', height: '11rem', margin: 'auto', display: 'block' }} />
                  <Card.Body>
                    <Card.Title><h2>510</h2></Card.Title>
                    <Card.Text><h5>Publications (&gt; 90% are IEEE)</h5></Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card style={{ width: '15rem', height: '20rem' }}>
                  <Card.Img variant="top" src={patent} style={{ width: '11rem', height: '11rem', margin: 'auto', display: 'block' }} />
                  <Card.Body>
                    <Card.Title><h2>11</h2></Card.Title>
                    <Card.Text><h5>Patents</h5></Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card style={{ width: '15rem', height: '20rem' }}>
                  <Card.Img variant="top" src={profit} style={{ width: '11rem', height: '11rem', margin: 'auto', display: 'block' }} />
                  <Card.Body>
                    <Card.Title><h2>48</h2></Card.Title>
                    <Card.Text><h5>Crores Funding (INR)</h5></Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col">
                <Card style={{ width: '15rem', height: '20rem' }}>
                  <Card.Img variant="top" src={project} style={{ width: '11rem', height: '11rem', margin: 'auto', display: 'block' }} />
                  <Card.Body>
                    <Card.Title><h2>61</h2></Card.Title>
                    <Card.Text><h5>Projects</h5></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <Row style={{ justifyContent: "center", padding: "10px", marginTop: "30px", marginBottom:"30px" }}>
            <Col xs="auto">
              <Button className='homebtn' variant="primary" style={{ fontSize: "1.2rem", padding: "10px 50px 10px 50px" }} onClick={About}> Read More </Button>{' '}
            </Col>
          </Row>

          {/* Our Achievement */}

          <Row style={{ justifyContent: "left", padding: "10px", marginBottom: "30px" }}>
            <h1 style={{ textAlign: "left" }}>Our Achievements </h1>
            <img src={strip} style={{ width: "350px", height: "6px" }}></img>
          </Row>

          <Row style={{ justifyContent: "left", padding: "10px", marginBottom:"30px" }}>
            <Col style={{ justifyContent: 'left' }}>
              <ol>
                <li>Congratulations to Dr. Yashasvi Bansal, Research Scholar, EED and Supervisor: Dr. Ranjana Sodhi on secutring a possition as Assistant Professor at IIT Delhi.</li>
                <li>Congratulations to Dr. Prashant Wagamabr Patil, Research Scholar, EED and Supervisor: Dr. Subrahmanyam Murala on secutring a possition as Assistant Professor at IIT Guwahati.</li>
                <li>Mr. Ashutosh Kulkarni, Research Scholar, EED (Supervisor: Dr. Subrahmanyam Murala and Dr. Santosh Kumar Vipparthi) selected for TCS Research Scholar Program.</li>
                <li>Mr. Sameer kumar Singh, Research Scholar, EED (Supervisor: Dr. Brijesh Kumbhani) selected for PMRF scheme.</li>
                <li>Mr. Sathyamoorthy D, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2022, 2nd prize award in JICABLE HVDC'21 and INAE-(Indian National Academy of Engineering) 100s award.</li>
                <li>Dr. Alampratap Singh Tiwana, Post-Doc, EED (Supervisor: Prof. C. C. Reddy) Won first prize in Siemens Energy Clean Energy competition 2021 organized globally!</li>
                <li>Dr. Birender Singh, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2022.</li>
                <li>Mr. G Nithin Reddy, M.Tech. Student, EED (Supervisor: Prof. C. C. Reddy) Won Sunny Oberoi 2021 for M.tech best thesis award and Won POSOCO Power system Award 2021 for M.Tech best Thesis.</li>
                <li>Mr. Azmeera Harshit Kumar, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) Won Sunny Oberoi 2021 for M.tech best thesis award.</li>
                <li>Mr. Enukonda Venkateshwar Reddy, M.Tech. Student, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2021 for M.Tech best Thesis.</li>
                <li>Mr. Arshdeep Singh Sandhu, M.Tech. Student, EED (Supervisor: Prof. C. C. Reddy) Won POSOCO Power system Award 2021 for M.Tech best Thesis.</li>
                <li>Mr. Arittra Das, Research Scholar, EED (Supervisor: Prof. C. C. Reddy) selected for PMRF scheme.</li>
              </ol>
            </Col>
          </Row>



          {/* Courses Offered */}

          <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "15px" }}>
            <h1 style={{ textAlign: "center" }}>Courses Offered</h1>
            <img src={strip} style={{ width: "350px", height: "6px" }}></img>
          </Row>
          <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px" }}>
            <p style={{ textAlign: "center" }}>See the breakdown of various courses offered respectively in below programmes</p>
          </Row>


          <Row style={{ justifyContent: "center", paddingBottom: "50px", marginBottom:"30px" }}>
            <Row xs={3} md={2} className="tech-icons d-flex align-items-center justify-content-center" >
              <span style={{ fontSize: "20px" }}>
                Bachelor of Technology (B.Tech.) Electrical Engineering
              </span>
            </Row>
            <Row xs={3} md={2} className="tech-icons d-flex align-items-center justify-content-center" >
              <span style={{ fontSize: "20px" }}>
                Bachelor of Technology (B. Tech.) Engineering Physics (Jointly with Physics Department)
              </span>
            </Row>
            <Row xs={3} md={2} className="tech-icons d-flex align-items-center justify-content-center" >
              <span style={{ fontSize: "20px" }}>
                Bachelor of Technology (B. Tech.) AIDE (Jointly with CSE & CARDS)
              </span>
            </Row>
            <Row xs={3} md={2} className="tech-icons d-flex align-items-center justify-content-center" >
              <span style={{ fontSize: "20px" }}>
                Master of Technology (M. Tech.)
              </span>
            </Row>
            <Row xs={3} md={2} className="tech-icons d-flex align-items-center justify-content-center" >
              <span style={{ fontSize: "20px" }}>
                Master of Science (M. S.)
              </span>
            </Row>
            <Row xs={3} md={2} className="tech-icons d-flex align-items-center justify-content-center" >
              <span style={{ fontSize: "20px" }}>
                Ph.D.
              </span>
            </Row>
          </Row>


          {/* Latest News */}

          <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "15px" }}>
            <h1 style={{ textAlign: "center" }}>Latest News</h1>
            <img src={strip} style={{ width: "350px", height: "6px" }}></img>
          </Row>

          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={news1} alt="First slide" style={{ width: "500px", height: "500px", transform: 'scale(0.8)'}} />
              <Carousel.Caption style={{ backgroundColor: "rgba(0, 33, 71, 0.7)" }}>
                <h4 style={{ fontWeight: "bold", fontSize: "24px", color: "white" }}>HoD, EED</h4>
                <p style={{ fontSize: "18px", color: "white" }}>
                  Prof. C. C. Reddy has taken the charge of HoD, EED
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={news2} alt="Second slide" style={{ width: "500px", height: "500px", transform: 'scale(0.8)' }} />
              <Carousel.Caption style={{ backgroundColor: "rgba(0, 33, 71, 0.7)" }}>
                <h4 style={{ fontWeight: "bold", fontSize: "24px", color: "white" }}>RSF Research Day - 2022</h4>
                <p style={{ fontSize: "18px", color: "white" }}>
                  RSF Research Day, EED was held on April 22, 2022.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "10px", marginTop:"30px" }}>
            <h4 style={{ textAlign: "center" }}>Read more updates and latest news below</h4>
          </Row>
          <Row style={{ justifyContent: "center", padding: "10px"}}>
            <Col xs="auto">
              <Button className='homebtn' variant="primary" style={{ fontSize: "1.2rem", padding: "10px 50px 10px 50px" }} onClick={About}> Read More </Button>{' '}
            </Col>
          </Row>

        </Container>
      </Container>
    </header>
  );
}