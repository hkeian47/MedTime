import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Mock data for appointments
    const mockAppointments = [
      { id: 1, date: '2024-07-20', time: '10:00 AM', doctor: { name: 'Dr. Smith' } },
      { id: 2, date: '2024-07-22', time: '02:00 PM', doctor: { name: 'Dr. Johnson' } },
    ];
    setAppointments(mockAppointments);
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, Patient</h2>
      <Link to="/">Logout</Link>
      <div className="appointments">
        <h3>Upcoming Appointments</h3>
        {appointments.map((appointment) => (
          <div key={appointment.id}>
            {appointment.date} - {appointment.time} with {appointment.doctor.name}
          </div>
        ))}
      </div>
      <div className="health-records">
        <h3>Health Records</h3>
        <button>View Records</button>
      </div>
      <div className="reminders">
        <h3>Reminders</h3>
        {/* Mock reminders here */}
      </div>
      <Link to="/book-appointment">
        <button>Book Appointment</button>
      </Link>
    </div>
  );
}

export default PatientDashboard;
