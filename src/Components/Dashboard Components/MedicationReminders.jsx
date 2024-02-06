import React from 'react';
import './ComponentsCSS/MedicationReminders.css'

const MedicationReminders = ({ medicationSchedule, setMedicationSchedule }) => {
  const handleMedicationTaken = (index) => {
    const updatedSchedule = [...medicationSchedule];
    updatedSchedule[index].taken = true;
    setMedicationSchedule(updatedSchedule);
  };

  return (
    <div className='innerElements_2'>
      <h2>Medication Reminders</h2>
      {medicationSchedule.map((medication, index) => (
        <div key={index}>
          <p>
            {medication.medication} - {medication.time}
          </p>
          {!medication.taken && (
            <button onClick={() => handleMedicationTaken(index)}>Mark as Taken</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MedicationReminders;
