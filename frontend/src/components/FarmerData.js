import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerData = () => {
  const [farmerData, setFarmerData] = useState([]);

  useEffect(() => {
    axios.get('https://farmer-dashboard-api.com/data')
      .then(response => {
        setFarmerData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Farmer Data</h2>
      <ul>
        {farmerData.map((data, index) => (
          <li key={index}>{data.name}: {data.yield}</li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerData;