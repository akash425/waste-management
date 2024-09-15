import React, { useState, useEffect } from 'react';
import { getFarmers, getCompanies } from './api';

function App() {
  const [farmers, setFarmers] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getFarmers().then(response => {
      setFarmers(response.data);
    });

    getCompanies().then(response => {
      setCompanies(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Agri Waste Marketplace</h1>
      <nav>
        <ul>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/farmers">Farmers</Link></li>
          <li><Link to="/companies">Companies</Link></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default App;