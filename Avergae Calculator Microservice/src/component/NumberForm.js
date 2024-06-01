import React from 'react';

const NumberForm = ({ numberId, setNumberId, number, setNumber, handleAddNumber, handleGetAverage }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Number ID"
          value={numberId}
          onChange={(e) => setNumberId(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddNumber}>Add Number</button>
        <button onClick={handleGetAverage}>Get Average</button>
      </div>
    </div>
  );
};

export default NumberForm;