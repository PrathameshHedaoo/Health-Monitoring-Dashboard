// AppointmentTracker.js
import React from 'react';
import './ComponentsCSS/AppointTracker.css'

const AppointmentTracker = ({ appointments }) => {
  return (
    <div className='innerElements_3'>
      <h2>Appointment Tracker</h2>
      {appointments.map((appointment, index) => (
        <div key={index}>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>Doctor: {appointment.doctor}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentTracker;
