import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SchedulerDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Mock data for appointments
    const mockAppointments = [
      { id: 1, date: '2024-07-20', time: '10:00 AM', patient: { name: 'John Doe' }, doctor: { name: 'Dr. Smith' } },
      { id: 2, date: '2024-07-22', time: '02:00 PM', patient: { name: 'Jane Smith' }, doctor: { name: 'Dr. Johnson' } },
    ];
    setAppointments(mockAppointments);
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, Scheduler</h2>
      <Link to="/">Logout</Link>
      <div className="appointments">
        <h3>All Appointments</h3>
        {appointments.map((appointment) => (
          <div key={appointment.id}>
            {appointment.date} - {appointment.time} with {appointment.patient.name} (Doctor: {appointment.doctor.name})
          </div>
        ))}
      </div>
      <Link to="/book-appointment">
        <button>Book Appointment</button>
      </Link>
    </div>
  );
}

export default SchedulerDashboard;
