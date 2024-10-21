import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBell } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import MydModalWithGrid from './MydModalWithGrid'; // Adjust the import path as needed

export default function Header({ events }) {
  const [dateTime, setDateTime] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [modalShow, setModalShow] = useState(false);


  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "orange" }}>
        <Container>
          <Navbar.Brand style={{ fontSize: "17px" }}>IT-RISK</Navbar.Brand>
          <Navbar.Brand style={{ fontSize: "30px" }} href="#home">Smart-Calendar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "20px" }}>
              <Nav.Link>Dashboard</Nav.Link>
              <Nav.Link>Expiring Controls</Nav.Link>
              <NavDropdown title="Events" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav style={{ fontSize: "20px" }}>
              <Dropdown alignRight>
                <Dropdown.Toggle variant="link" id="dropdown-notifications" onClick={() => setModalShow(true)}>
                  <FaBell size={24} />
                  <span className="badge badge-danger" style={{ fontSize: "20px" }}>{events.length}</span>
                </Dropdown.Toggle>
              </Dropdown>
              <Nav.Link href="">User's CK</Nav.Link>
              <Nav.Link eventKey={2} href="">
                {dateTime}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <MydModalWithGrid
      size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        events={events}
      />
    </>
  );
}
