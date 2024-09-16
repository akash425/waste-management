import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FarmerDashboard = () => {
  const [wasteListings, setWasteListings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/farmers/me')
      .then((response) => {
        const farmerId = response.data.id;
        axios.get(`/api/waste?farmerId=${farmerId}`)
          .then((response) => {
            setWasteListings(response.data);
          })
          .catch((error) => {
            setError(error.response.data.error);
          });
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  }, []);

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Waste Type</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {wasteListings.map((wasteListing) => (
            <tr key={wasteListing.id}>
              <td>{wasteListing.type}</td>
              <td>{wasteListing.quantity}</td>
              <td>{wasteListing.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default FarmerDashboard;