import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Mock data for appointments
    const mockAppointments = [
      { id: 1, date: '2024-07-20', time: '10:00 AM', patient: { name: 'John Doe' } },
      { id: 2, date: '2024-07-22', time: '02:00 PM', patient: { name: 'Jane Smith' } },
    ];
    setAppointments(mockAppointments);
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, Doctor</h2>
      <Link to="/">Logout</Link>
      <div className="calendar">
        <h3>My Schedule</h3>
        {appointments.map((appointment) => (
          <div key={appointment.id}>
            {appointment.date} - {appointment.time} with {appointment.patient.name}
          </div>
        ))}
      </div>
      <button>Block Time</button>
      <div className="patients">
        <h3>Patient Records</h3>
        {/* Mock patient records here */}
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        {/* Mock notifications here */}
      </div>
    </div>
  );
}

export default DoctorDashboard;

