import React, { useState } from 'react';
import './App.css';
import test from './test.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx';
import 'react-calendar/dist/Calendar.css';
import MyCalendarComponent from './MyCalendarComponent.jsx';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from './Footer.jsx';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

const App = () => {
  const [selectedApp, setSelectedApp] = useState('app1');
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleAppChange = (event) => {
    setSelectedApp(event.target.value);
  };

  const { apps } = test;
  const selectedAppDetails = apps.find(app => app.id === selectedApp);
  const combinedEvents = apps.flatMap(app => app.events.map(event => ({ ...event, appName: app.name, date: new Date(event.date) })));

  const openModal = (value) => {
    setDate(value);
    const dayEvents = selectedAppDetails.events.filter(event => new Date(event.date).toDateString() === value.toDateString());
    setSelectedEvents(dayEvents);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getColor = (importance) => {
    switch (importance) {
      case 'high':
        return '#ff0000';
      case 'medium':
        return '#ffcc00';
      case 'low':
        return '#4caf50';
      default:
        return '#000000';
    }
  };

  return (
    <>
      <Header events={combinedEvents} />
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-6">
            <Form.Select aria-label="Default select example" className="form-control" onChange={handleAppChange}>
              {apps.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name} ({app.events.length} events)
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Priority Levels</h5>
                <div className="d-flex align-items-center mb-2">
                  <FaCircle color="#ff0000" className="mr-2" /> High Importance
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaCircle color="#ffcc00" className="mr-2" /> Medium Importance
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaCircle color="#4caf50" className="mr-2" /> Low Importance
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{selectedAppDetails.name}</h5>
                <p className="card-text">App ID: {selectedAppDetails.id}</p>
                <p className="card-text">IT Custodian: {selectedAppDetails.custodian}</p>
                <p className="card-text">Asset Owner: {selectedAppDetails.owner}</p>
                <p className="card-text">Number of events: {selectedAppDetails.events.length}</p>
              </div>
              <div className="card-body">
                <MyCalendarComponent events={selectedAppDetails.events.map(event => ({ ...event, date: new Date(event.date) }))} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Compliance Score</h5>
                <CircularProgressbar
                  value={selectedAppDetails.compliance}
                  text={`${selectedAppDetails.compliance}%`}
                  styles={buildStyles({
                    textColor: '#000',
                    pathColor: selectedAppDetails.compliance < 80 ? '#ff0000' : selectedAppDetails.compliance <= 85 ? '#ffcc00' : '#4caf50',
                    trailColor: '#d6d6d6',
                  })}
                />
              </div>
              <div className="list-group">
                {selectedAppDetails.events.map((event, index) => (
                  <button key={index} type="button" className="list-group-item list-group-item-action" onClick={() => openModal(new Date(event.date))}>
                    <FaCircle color={getColor(event.importance)} /> {new Date(event.date).toDateString()} - {event.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modalIsOpen} onHide={closeModal}>
        <ModalHeader closeButton>Events</ModalHeader>
        <ModalBody>
          {selectedEvents.map((event, index) => (
            <p key={index}>{event.title} on {new Date(event.date).toDateString()}</p>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
      <Footer />
    </>
  );
};

export default App;
