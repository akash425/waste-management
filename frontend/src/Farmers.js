import React, { useState, useEffect } from 'react';
import FarmerForm from './FarmerForm';
import { getFarmers, getCompanies } from './api';


function Farmers() {
    const [farmers, setFarmers] = useState([]);
    useEffect(() => {
        async function fetchFarmers() {
            const farmersData = await getFarmers();
            setFarmers(farmersData);
        }
        fetchFarmers();
    }, []);

    return (
        <div>
            <h1>Farmers Page</h1>
            <FarmerForm />
            <ul>
                {farmers.map((farmer) => (
                    <li key={farmer.id}>{farmer.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Farmers;