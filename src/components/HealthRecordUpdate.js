import React, { useState } from 'react';

function HealthRecordUpdate() {
  const [record, setRecord] = useState('');

  const handleUpdate = () => {
    // Mock update logic
    console.log('Health record updated:', record);
  };

  return (
    <div className="health-record-update">
      <h2>Update Health Record</h2>
      <textarea
        placeholder="Health Record"
        value={record}
        onChange={(e) => setRecord(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default HealthRecordUpdate;

