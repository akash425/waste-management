import React, { useState } from 'react';
import axios from 'axios';
import api from '../api/api';


const CompanyAlerts = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.post('/api/companies/alerts', {
      message: alertMessage,
    })
      .then((response) => {
        console.log(response.data);
        // TO DO: Handle successful alert creation
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <div>
      <h2>Company Alerts</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Alert Message:
          <input type="text" value={alertMessage} onChange={(event) => setAlertMessage(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create Alert</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
};

export default CompanyAlerts;