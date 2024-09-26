"use client";
import React, { useState } from 'react';

const Navbar = ({ onLocationChange, onMonthChange, onDayChange }) => {
  const [coalfield, setCoalfield] = useState('All');
  const [month, setMonth] = useState('All');
  const [day, setDay] = useState('');

  // Handle Location (Coalfield) Change
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setCoalfield(selectedLocation);
    onLocationChange(selectedLocation);
  };

  // Handle Month Change
  const handleMonthChange = (e) => {
    const selectedMonth = e.target.value;
    setMonth(selectedMonth);
    onMonthChange(selectedMonth);
  };

  // Handle Day Input Change
  const handleDayChange = (e) => {
    const selectedDay = e.target.value;
    setDay(selectedDay);
    onDayChange(selectedDay);
  };

  return (
    <nav className="bg-blue-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Logo and Title */}
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">🌿</span> {/* Example icon as text */}
          <span className="text-2xl font-bold">EcoMines Dashboard</span>
        </div>

        {/* Dropdowns for Coalfield, Month, and Day */}
        <div className="flex space-x-6 items-center">
          
          {/* Coalfield Dropdown */}
          <div className="flex items-center">
            <label htmlFor="coalfield" className="mr-2">Coalfield</label>
            <select
              id="coalfield"
              className="text-black rounded-md px-2 py-1"
              value={coalfield}
              onChange={handleLocationChange}
            >
              <option value="All">All</option>
              <option value="Coalfield 1">Coalfield 1</option>
              <option value="Coalfield 2">Coalfield 2</option>
              <option value="Coalfield 3">Coalfield 3</option>
            </select>
          </div>

          {/* Month Dropdown */}
          <div className="flex items-center">
            <label htmlFor="month" className="mr-2">Month</label>
            <select
              id="month"
              className="text-black rounded-md px-2 py-1"
              value={month}
              onChange={handleMonthChange}
            >
              <option value="All">All</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              {/* Add remaining months */}
            </select>
          </div>

          {/* Day Input */}
          <div className="flex items-center">
            <label htmlFor="day" className="mr-2">Day</label>
            <input
              type="number"
              id="day"
              className="text-black rounded-md px-2 py-1 w-16"
              value={day}
              onChange={handleDayChange}
              min={1}
              max={31} // Assuming max 31 days in a month
              placeholder="1-31"
            />
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
