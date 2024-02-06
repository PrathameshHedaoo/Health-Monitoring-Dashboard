import React, { useState } from 'react';
import VitalSigns from './Dashboard Components/VitalSigns';
import MedicationReminders from './Dashboard Components/MedicationReminders';
import AppointmentTracker from './Dashboard Components/AppointmentTracker';
import ActivityLog from './Dashboard Components/ActivityLog';
import './Dashboard.css'

function Dashboard() {
  const [vitalSigns, setVitalSigns] = useState({
    heartRate: 75,
    bloodPressure: '120/80',
    oxygenSaturation: 98,
  });

  const [medicationSchedule, setMedicationSchedule] = useState([
    { time: '09:00 AM', medication: 'Medicine A', taken: false },
    { time: '01:00 PM', medication: 'Medicine B', taken: false },
  ]);

  const [appointments, setAppointments] = useState([
    { date: '2024-02-10', time: '10:30 AM', doctor: 'Dr. Smith' },

  ]);

  const [activityLog, setActivityLog] = useState([]);

  return (
    <div className='Dashboard'>
      <h1 className='dashboardHeading'><span className="seperate1">Health Monitoring</span> <span className='seperate2'>Dashboard</span></h1>
      <div className="dashboardComponents">
        <VitalSigns vitalSigns={vitalSigns} />
        <MedicationReminders
        medicationSchedule={medicationSchedule}
        setMedicationSchedule={setMedicationSchedule}/>
        <AppointmentTracker appointments={appointments} />
        <ActivityLog activityLog={activityLog} setActivityLog={setActivityLog} />
      </div>
    </div>
  );
};

export default Dashboard;
