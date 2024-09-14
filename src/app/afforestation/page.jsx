'use client'; 

import React from 'react';
import { Chart } from 'react-google-charts';
import AfforestationAnalytics from './AfforestationAnalytics';

export const data = [
  ["Year", "forest cover:(Mha)", { role: "style" }],
  [1999, 65, "#00FFFF"],
  [2003, 69, "#00FFFF"],
  [2007, 66, "#00FFFF"],
  [2011, 68, "#00FFFF"],
  [2015, 69.5, "#00FFFF"],
  [2019, 70, "#00FFFF"],
  [2023, 70.5, "#00FFFF"],
  [2027, 70.7, "#00FFFF"],
  [2031, 70.9, "#00FFFF"],
];

const Afforestation = () => {
  return (
    <AfforestationAnalytics/>
    
  );
};

export default Afforestation;
