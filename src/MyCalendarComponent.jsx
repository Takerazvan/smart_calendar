
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import "./App.css"
export default function MyCalendarComponent({ events , onDateClick }) {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const openModal = (value) => {
    setDate(value);
    const dayEvents = events.filter(event => event.date.toDateString() === value.toDateString());
    setSelectedEvents(dayEvents);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dayEvents = events.filter(event => event.date.toDateString() === date.toDateString());
      if (dayEvents.length > 1) {
        return 'multiple-events-day';
      } else if (dayEvents.length === 1) {
        return 'single-event-day';
      }
    }
    return null;
  };

  return (
    <div>
      <Calendar onClickDay={openModal} tileClassName={tileClassName} />
      <Modal show={modalIsOpen} onHide={closeModal} >
        <ModalHeader closeButton>Events</ModalHeader>
        <ModalBody>
          {selectedEvents.length > 0 ? (
            selectedEvents.map((event, index) => (
              <p key={index}>{event.title} on {event.date.toDateString()}</p>
            ))
          ) : (
            <p>No events on {date.toDateString()}</p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}