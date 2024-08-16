import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import BookAppointment from './components/BookAppointment';
import DoctorDashboard from './components/DoctorDashboard';
import SchedulerDashboard from './components/SchedulerDashboard';
import HealthRecordUpdate from './components/HealthRecordUpdate';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/patient-dashboard" component={PatientDashboard} />
          <Route path="/book-appointment" component={BookAppointment} />
          <Route path="/doctor-dashboard" component={DoctorDashboard} />
          <Route path="/scheduler-dashboard" component={SchedulerDashboard} />
          <Route path="/health-record-update" component={HealthRecordUpdate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
