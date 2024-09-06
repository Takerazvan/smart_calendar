import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="text-black mt-2 p-1 text-center" style={{backgroundColor:"orange" , fontSize:"20px"}}>
      <Container>
        <Row>
          <Col>
            <p>© {new Date().getFullYear()} IT RISK Calendar</p>
      
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


