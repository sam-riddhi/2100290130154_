import React, { useState } from 'react';
import './App.css';
import NumberForm from './components/NumberForm';
import AverageDisplay from './components/AverageDisplay';
import Message from './components/Message';

function App() {
  const [numberId, setNumberId] = useState('');
  const [number, setNumber] = useState('');
  const [average, setAverage] = useState(null);
  const [message, setMessage] = useState('');

  const handleAddNumber = async () => {
    if (!numberId || !number) {
      setMessage('Please enter both Number ID and Number');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:5000/numbers/${numberId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: parseFloat(number) })
      });

      if (response.ok) {
        setMessage('Number added successfully.');
        setNumber('');
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to add number');
      }
    } catch (error) {
      setMessage('Error connecting to the server');
    }
  };

  const handleGetAverage = async () => {
    if (!numberId) {
      setMessage('Please enter a Number ID');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:5000/numbers/${numberId}`);

      if (response.ok) {
        const data = await response.json();
        setAverage(data.average);
      } else {
        const data = await response.json();
        setMessage(data.error || 'Failed to fetch average');
      }
    } catch (error) {
      setMessage('Error connecting to the server');
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <NumberForm
        numberId={numberId}
        setNumberId={setNumberId}
        number={number}
        setNumber={setNumber}
        handleAddNumber={handleAddNumber}
        handleGetAverage={handleGetAverage}
      />
      {message && <Message message={message} />}
      {average !== null && <AverageDisplay average={average} />}
    </div>
  );
}

export default App;