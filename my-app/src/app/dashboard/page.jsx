// pages/dashboard.jsx

// src/app/dashboard/page.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      <h1 className="sr-only">Dashboard</h1>
      <iframe
        title="Final SIH - Personal Dashboard"
        className="w-full h-full border-none" 
        src="https://app.powerbi.com/reportEmbed?reportId=1ad2b270-011d-4817-9cb9-1dcbf9954822&autoAuth=true&ctid=c161ec3a-f23b-463b-823e-79329dc7b3f9"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Dashboard;     



// dashboard/page.jsx
// dashboard/page.jsx
