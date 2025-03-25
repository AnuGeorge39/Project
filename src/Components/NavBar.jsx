import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"className="companyname">ariussoft</Navbar.Brand>
        Infotech Pvt Ltd
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="WHAT" id="collapsible-nav-dropdown">
          <NavDropdown.Item as={Link} to="/software-development">
            Software Development
          </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mobile App Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Website Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Web Application Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">E-Commerce Website Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Search Engine Optimization </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Web Hosting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Digital Marketing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Social Media Campaigns</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Branding</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Advertising</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Package Design</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="WE" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ariussoft Infotech Pvt Ltd</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Arius Web Studio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Think Thick</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Host Station</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Core Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Testimonials </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Insights</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="DO" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
              </NavDropdown>
              
            <NavDropdown title="FOR" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Clients</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="YOU" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Feedback</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Get a Quote</NavDropdown.Item>
            </NavDropdown>

            <Navbar.Brand href="Contactus.jsx" className="Quote">Get a Quote</Navbar.Brand>
           
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
