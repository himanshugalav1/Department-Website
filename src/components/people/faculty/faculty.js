import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import strip from "../../../assets/img/heading_main_border.png"
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import prof from '../../../assets/img/custom/faculty/power/reddy.jpg';

export default function faculty() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "50px" }}>
          <h1 style={{ textAlign: "center" }}>Faculty Members</h1>
          <img src={strip} style={{ alignContent: "center", width: "350px", height: "6px" }}></img>
        </Row>

      {/* HOD */}
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "20px" }}>
          <h3 style={{ textAlign: "center" }}>
            <span style={{ backgroundColor: "rgba(0, 33, 71, 0.7)", padding: "5px 20px 5px 20px", borderRadius: "5px" }}>
              Head of Department
            </span>
          </h3>
        </Row>

        <Card sx={{ maxWidth: 550 }} style={{ justifyContent: 'center', margin: 'auto', marginBottom: '70px' }}>
          <Grid container>
            <Grid item xs={4}>
              <CardMedia component="img" alt="prof img" image={prof} style={{ height: '100%' }} />
            </Grid>
            <Grid item xs={8}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">C. C. Reddy</Typography>
                <Typography variant="body2" fontSize={13} color="rgb(90, 90, 90)">
                  Professor & Head of the Department
                </Typography>

                <Typography variant="body2" color="rgb(40, 40, 40)">
                  <b>Phone:</b> &nbsp; +91-1881-232201/232210/231045.
                </Typography>
                <Typography variant="body2" color="rgb(40, 40, 40)">
                  <b>Email:</b> &nbsp; hodelectrical [AT] iitrpr.ac.in..
                </Typography>
                <Typography variant="body2" color="rgb(40, 40, 40)">
                  <b>Research Interests:</b> &nbsp; Mechanism of Conduction and Breakdown in Dielectrics, Space Charges in Dielectrics, HVDC Cables and accessories, High Voltage Engineering, Nano Dielectrics.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>

        {/* Power Engineering */}

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <h3 style={{ textAlign: "center", backgroundColor: "rgba(0, 33, 71, 0.7)", padding: '10px 0px 10px 0px', borderRadius: "5px" }}>
            <span>
              Power Engineering
            </span>
          </h3>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "30px" }}>
          <Col>
            <Card sx={{ maxWidth: 550 }} style={{ justifyContent: 'center', margin: 'auto', marginBottom: '70px' }}>
              <Grid container>
                <Grid item xs={4}>
                  <CardMedia component="img" alt="prof img" image={prof} style={{ height: '100%' }} />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">C. C. Reddy</Typography>
                    <Typography variant="body2" fontSize={13} color="rgb(90, 90, 90)">
                      Professor & Head of the Department
                    </Typography>

                    <Typography variant="body2" color="rgb(40, 40, 40)">
                      <b>Phone:</b> &nbsp; +91-1881-232201/232210/231045.
                    </Typography>
                    <Typography variant="body2" color="rgb(40, 40, 40)">
                      <b>Email:</b> &nbsp; hodelectrical [AT] iitrpr.ac.in..
                    </Typography>
                    <Typography variant="body2" color="rgb(40, 40, 40)">
                      <b>Research Interests:</b> &nbsp; Mechanism of Conduction and Breakdown in Dielectrics, Space Charges in Dielectrics, HVDC Cables and accessories, High Voltage Engineering, Nano Dielectrics.
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Col>
          <Col>
            <Card sx={{ maxWidth: 550 }} style={{ justifyContent: 'center', margin: 'auto', marginBottom: '70px' }}>
              <Grid container>
                <Grid item xs={4}>
                  <CardMedia component="img" alt="prof img" image={prof} style={{ height: '100%' }} />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">C. C. Reddy</Typography>
                    <Typography variant="body2" fontSize={13} color="rgb(90, 90, 90)">
                      Professor & Head of the Department
                    </Typography>

                    <Typography variant="body2" color="rgb(40, 40, 40)">
                      <b>Phone:</b> &nbsp; +91-1881-232201/232210/231045.
                    </Typography>
                    <Typography variant="body2" color="rgb(40, 40, 40)">
                      <b>Email:</b> &nbsp; hodelectrical [AT] iitrpr.ac.in..
                    </Typography>
                    <Typography variant="body2" color="rgb(40, 40, 40)">
                      <b>Research Interests:</b> &nbsp; Mechanism of Conduction and Breakdown in Dielectrics, Space Charges in Dielectrics, HVDC Cables and accessories, High Voltage Engineering, Nano Dielectrics.
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Col>
        </Row>


      </Container >
    </Container >
  );
}
