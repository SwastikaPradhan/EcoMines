


"use client";  // Required for Next.js


import React from 'react';


const EmissionCard = ({ title, value, unit = 'tons', icon }) => {

    return (
        <div className="emission-card bg-white shadow-md rounded-md p-4 w-64 text-center m-2">
            {icon && <div className="text-4xl mb-2">{icon}</div>} {/* Render icon if provided */}
            <h2 className="text-xl font-semibold text-blue-900 mb-2">{title}</h2>
            <p className="text-3xl font-bold text-gray-800">
                {value} <span className="text-lg font-medium">{unit}</span>
            </p>
        </div>
    );
};

export default EmissionCard;

