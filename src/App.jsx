import { useState } from 'react';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx';
import 'react-calendar/dist/Calendar.css';
import MyCalendarComponent from './MycalendarComponent.jsx';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const App = () => {
  const [selectedApp, setSelectedApp] = useState('app1');

  const handleAppChange = (event) => {
    setSelectedApp(event.target.value);
  };

  const appDetails = {
    app1: { name: 'MarketFXTrade', id: '0006T0dsadas', custodian: 'John Doe', owner: 'Jane Smith', compliance: 98 },
    app2: { name: 'TradeAnalyzer', id: '0000sdasad08xdsas', custodian: 'John Doe', owner: 'Bob Brown', compliance: 90 },
    app3: { name: 'RiskManager', id: '0000dasdsadas09y', custodian: 'John Doe', owner: 'Dana White', compliance: 75 },
    app4: { name: 'PortfolioTracker', id: '0000dsasdasd10z', custodian: 'John Doe', owner: 'Frank Green', compliance: 80 },
  };

  const events = {
    app1: [
      { date: new Date(2024, 8, 10), title: 'App1 Event 1' },
      { date: new Date(2024, 8, 10), title: 'App1 Event 2' },
      { date: new Date(2024, 8, 12), title: 'App1 Event 3' },
      { date: new Date(2024, 8, 14), title: 'App1 Event 4' }
    ],
    app2: [
      { date: new Date(2024, 8, 10), title: 'App2 Event 1' },
      { date: new Date(2024, 8, 20), title: 'App2 Event 2' },
    ],
    app3: [
      { date: new Date(2024, 8, 12), title: 'App3 Event 1' },
      { date: new Date(2024, 8, 22), title: 'App3 Event 2' },
    ],
    app4: [
      { date: new Date(2024, 8, 8), title: 'App4 Event 1' },
      { date: new Date(2024, 8, 18), title: 'App4 Event 2' },
    ],
  };

  const selectedAppDetails = appDetails[selectedApp];
  const selectedAppEvents= events[selectedApp];

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-6">
          <select className="form-control" onChange={handleAppChange}>
              {Object.keys(appDetails).map((appKey) => (
                <option key={appKey} value={appKey}>
                  {appDetails[appKey].name} ({events[appKey].length} events)
                </option>
              ))}
            </select>
            </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{selectedAppDetails.name}</h5>
                <p className="card-text">Appld: {selectedAppDetails.id}</p>
                <p className="card-text">IT Custodian: {selectedAppDetails.custodian}</p>
                <p className="card-text">Asset Owner: {selectedAppDetails.owner}</p>
                <p className="card-text">Number of events: </p>
              </div>
              <div className="card-body">
                <MyCalendarComponent events={events[selectedApp]} />
              </div>
            </div>
          </div>
       
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
              <p className="card-text">extra info</p>
                 <p className="card-text">Extra Info</p>
                 <p className="card-text">Extra Info</p>
            </div>
          </div>
        </div>

    </>
  );
};

export default App;