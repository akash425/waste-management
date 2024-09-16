import React from 'react';
import CompanySearch from './CompanySearch';
import CompanyBrowse from './CompanyBrowse';
import CompanyAlerts from './CompanyAlerts';
import FarmerData from './FarmerData';

const CompanyDashboard = () => {
  return (
    <div>
      <h1>Company Dashboard</h1>
      <CompanySearch />
      <CompanyBrowse />
      <CompanyAlerts />
      <FarmerData />
    </div>
  );
};

export default CompanyDashboard;