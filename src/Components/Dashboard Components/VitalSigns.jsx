import React from 'react';
import './ComponentsCSS/VitalSigns.css'

function VitalSigns({ vitalSigns }) {
  return (
    <div className='innerElements'>
      <h2>Vital Signs</h2>
      <p>Heart Rate: {vitalSigns.heartRate}</p>
      <p>Blood Pressure: {vitalSigns.bloodPressure}</p>
      <p>Oxygen Saturation: {vitalSigns.oxygenSaturation}</p>
    </div>
  );
};

export default VitalSigns;
