import React, { useState } from 'react';
import axios from 'axios';
import api from '../api/api';


const CompanySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.get(`/api/companies/search?q=${searchQuery}`)
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <div>
      <h2>Company Search</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search companies"/>
        </label>
        <br />
        <button type="submit">Search</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      
        <ul>
          {companies.map((company) => (
            <li key={company.id}>{company.name}</li>
          ))}
        </ul>
      
    </div>
  );
};

export default CompanySearch;