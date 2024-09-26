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


/**"use client";  // Required for Next.js

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PieChart from './Charts/PieChart';
import EmissionCard from './components/EmissionCard';  // Import EmissionCard component

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedCoalfield, setSelectedCoalfield] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [selectedDay, setSelectedDay] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when component mounts or filters change
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.BASE_URL}/api/odishadata`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError('Failed to fetch data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCoalfield, selectedMonth, selectedDay]);

  const pieChartData = {
    labels: ['Methane', 'Equipment', 'Scope 3', 'Fuel', 'Electricity'],
    datasets: [{
      label: 'Emissions by Source',
      data: [
        data[0]?.Methane_Emissions || 0,
        data[0]?.Equipment_Emissions || 0,
        data[0]?.Scope_3_Emissions || 0,
        data[0]?.Fuel_Emissions || 0,
        data[0]?.Electricity_Emissions || 0,
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      hoverOffset: 4,
    }]
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="dashboard">
      <Navbar
        onLocationChange={setSelectedCoalfield}
        onMonthChange={setSelectedMonth}
        onDayChange={setSelectedDay}
      />

      <h1>Your EcoMines Dashboard</h1>

      <div className="top-row flex flex-wrap justify-between">
        <EmissionCard title="Methane Emissions [tons]" value={data[0]?.Methane_Emissions || 0} />
        <EmissionCard title="Equipment Emissions [tons]" value={data[0]?.Equipment_Emissions || 0} />
        <EmissionCard title="Scope 3 Emissions [tons]" value={data[0]?.Scope_3_Emissions || 0} />
        <EmissionCard title="Fuel Emissions [tons]" value={data[0]?.Fuel_Emissions || 0} />
        <EmissionCard title="Electricity Emissions [tons]" value={data[0]?.Electricity_Emissions || 0} />
      </div>

      <div className="pie-chart-section mt-8">
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default Dashboard;**/
