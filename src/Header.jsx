import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBell } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';

export default function Header({ events }) {
  const [dateTime, setDateTime] = useState('');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    setDateTime(dateTimeString);

    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const upcomingEvents = events
      .filter(event => new Date(event.date).getMonth() === currentMonth && new Date(event.date).getFullYear() === currentYear)
      .map(event => `${event.title} on ${new Date(event.date).toDateString()} for ${event.appName}`);

    setNotifications(upcomingEvents);
  }, [events]);

  return (
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
              <Dropdown.Toggle variant="link" id="dropdown-notifications">
                <FaBell size={24} />
                <span className="badge badge-danger" style={{ fontSize: "20px" }}>{notifications.length}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {notifications.map((notification, index) => (
                  <Dropdown.Item key={index}>{notification}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="">User's CK</Nav.Link>
            <Nav.Link eventKey={2} href="">
              {dateTime}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
