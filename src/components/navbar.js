import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/img/custom/landing/iitr-banner.png";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid" width="230" height="100" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                 HOME
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                ABOUT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <NavDropdown title="PEOPLE" id="basic-nav-dropdown" className="navdrop">
                <NavDropdown.Item as={Link} to="/people/faculty">FACULTY</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/people/staff">STAFF</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/people/students">STUDENTS</NavDropdown.Item>
                </NavDropdown>  
            </Nav.Item>

            <Nav.Item>
                <NavDropdown title="COURSES" id="basic-nav-dropdown" className="navdrop">
                <NavDropdown.Item as={Link} to="/courses/btech">B.TECH.</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/courses/mtech">M.TECH.</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/courses/ms">M.S.</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/courses/phd">PH.D.</NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>
            
            <Nav.Item>
                <NavDropdown title="RESEARCH" id="basic-nav-dropdown" className="navdrop">
                <NavDropdown.Item as={Link} to="/research/areas">AREAS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/research/facilities">FACILITIES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/research/labs">LABORATORIES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/research/publications">PUBLICATIONS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/research/projects">PROJECTS</NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={Link} to="/admission" onClick={() => updateExpanded(false)}>
                ADMISSION
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/achievements" onClick={() => updateExpanded(false)}>
                ACHIEVEMENTS
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={Link} to="/committees" onClick={() => updateExpanded(false)}>
                COMMITTEES
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                CONTACT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <NavDropdown title="OTHER" id="basic-nav-dropdown" className="navdrop">
                <NavDropdown.Item as={Link} to="/login">LOGIN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/addpubs">ADD PUBLICATIONS</NavDropdown.Item>
                </NavDropdown>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
