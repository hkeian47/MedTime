import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookAppointment() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleBooking = () => {
    // Mock booking logic
    console.log('Appointment booked:', { doctor, date, time, reason });
  };

  return (
    <div className="book-appointment">
      <h2>Book Appointment</h2>
      <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
        <option value="">Select Doctor</option>
        <option value="Dr. Smith">Dr. Smith</option>
        <option value="Dr. Johnson">Dr. Johnson</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="02:00 PM">02:00 PM</option>
      </select>
      <textarea
        placeholder="Reason for Visit"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <button onClick={handleBooking}>Book Appointment</button>
      <Link to="/patient-dashboard">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default BookAppointment;

