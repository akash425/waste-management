import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../api/api';


const CompanyBrowse = () => {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/api/companies')
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  }, []);

  return (
    <div>
      <h2>Company Browse</h2>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CompanyBrowse;