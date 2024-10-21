import { Modal, ModalTitle, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MydModalWithGrid(props) {
  return (
    <Modal {...props}   >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          Upcoming Events
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <Container>
          {props.events.map((event, index) => (
            <Row key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
              <Col >
                <strong>{event.title}</strong> on {new Date(event.date).toDateString()} for {event.appName}
              </Col>
            </Row>
          ))}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
