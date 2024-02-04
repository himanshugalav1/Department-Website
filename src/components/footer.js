import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


export default function footer() {
	let date = new Date();
	let year = date.getFullYear();

	return (
		<MDBFooter className='text-center text-lg-start footer'>
			<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
				<div className='me-5 d-none d-lg-block'>
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<a href='' className='me-4 text-reset'>
						<FaFacebook />
					</a>
					<a href='' className='me-4 text-reset'>
						<FaTwitter />
					</a>
					<a href='' className='me-4 text-reset'>
						<FaInstagram />
					</a>
					<a href='' className='me-4 text-reset'>
						<FaLinkedin />
					</a>
					<a href='' className='me-4 text-reset'>
						<MDBIcon fab icon="linkedin" />
					</a>
				</div>
			</section>

			<section className=''>
				<MDBContainer className='text-center text-md-start mt-5'>
					<MDBRow className='mt-3'>

						<MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
							<p>
								<a href='#!' className='text-reset'>
									Classroom Booking
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Download Forms
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Moodle and CRP
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Leave Application Form for Scholars
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									IIT Ropar Website
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									How to reach IIT Ropar
								</a>
							</p>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Opportunities</h6>
							<p>
								<a href='#!' className='text-reset'>
									Faculty Position
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Ph.D. Position
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Staff Position
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Project Position
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Post Doctorate Fellowship
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Summer Internship
								</a>
							</p>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Other Links</h6>
							<p>
								<a href='#!' className='text-reset'>
									Deans
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Associate Deans
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Head of Departments
								</a>
							</p>
							<p>
								<a href='#!' className='text-reset'>
									Administrative Officials
								</a>
							</p>
						</MDBCol>

						{/* <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
							<h6 className='text-uppercase fw-bold mb-4'>Other Links</h6>
							<p>
								<MDBIcon icon="home" className="me-2" />
								New York, NY 10012, US
							</p>
							<p>
								<MDBIcon icon="envelope" className="me-3" />
								info@example.com
							</p>
							<p>
								<MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
							</p>
							<p>
								<MDBIcon icon="print" className="me-3" /> + 01 234 567 89
							</p>
						</MDBCol> */}

					</MDBRow>
				</MDBContainer>
			</section>


			<div md="4" className='footer-copywright'>
				<Row>
					<Col>
						<p>Copyright © {year} </p>
					</Col>

					<Col>
						<p>Designed and Developed by Himanshu Galav</p>
					</Col>
				</Row>
			</div>

		</MDBFooter>

	);
}