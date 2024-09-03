
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function  Header ()  {

    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        setDateTime(dateTimeString);
    }, []);
  return (
   <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "orange"}}>
   <Container>
   <Navbar.Brand >IT-RISK
   </Navbar.Brand>

    <Navbar.Brand href="#home">Smart-Calendar</Navbar.Brand>
 
  

    
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
         <Nav.Link href="#features">Dashboard</Nav.Link>
         <Nav.Link href="#pricing">Expiring Controls</Nav.Link>
         <NavDropdown title="Events" id="collapsible-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Separated link
           </NavDropdown.Item>
         </NavDropdown>
       </Nav>
       <Nav>
         <Nav.Link href="#deets">User's CK</Nav.Link>
         <Nav.Link eventKey={2} href="#memes">
         {dateTime}
         </Nav.Link>
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
  );
};
 
