
/**import React from 'react';
import { FaDatabase, FaChartLine, FaTree, FaSolarPanel, FaExclamationTriangle, FaTachometerAlt } from 'react-icons/fa';

const PhasesSummary = () => {
  const phases = [
    {
      title: 'Data Collection',
      description: 'Collecting emission-related data from various mining sources.',
      icon: <FaDatabase className="text-green-500" size={28} />,
    },
    {
      title: 'Emission Estimation',
      description: 'Estimating carbon emissions based on the collected data.',
      icon: <FaChartLine className="text-red-500" size={28} />,
    },
    {
      title: 'Afforestation Planning',
      description: 'Planning afforestation efforts to mitigate emissions.',
      icon: <FaTree className="text-green-700" size={28} />, // Changed the icon color to match nature
    },
    {
      title: 'Clean Energy Recommendations',
      description: 'Recommending clean energy solutions to reduce future emissions.',
      icon: <FaSolarPanel className="text-yellow-500" size={28} />,
    },
    {
      title: 'Gap Analysis',
      description: 'Identifying gaps in current efforts to improve emission reduction.',
      icon: <FaExclamationTriangle className="text-orange-500" size={28} />,
    },
    {
      title: 'Dashboard Development',
      description: 'Developing a dashboard to monitor and track emissions over time.',
      icon: <FaTachometerAlt className="text-blue-500" size={28} />,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-12">
      <div className="w-full max-w-7xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 tracking-wide">Carbon Emission Management Phases</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {phase.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{phase.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhasesSummary;**/

/**import React from 'react';
import { FaDatabase, FaChartLine, FaTree, FaSolarPanel, FaExclamationTriangle, FaSearch, FaRegChartBar, FaLightbulb, FaDollarSign, FaLeaf } from 'react-icons/fa';

const PhasesSummary = () => {
  const phases = [
    {
      title: 'Data Collection',
      description: 'Gather emission data from mining activities for further analysis.',
      icon: <FaDatabase size={36} className="text-green-500" />,
    },
    {
      title: 'Emission Estimation',
      description: 'Estimate carbon emissions based on collected data.',
      icon: <FaChartLine size={36} className="text-red-500" />,
    },
    {
      title: 'Afforestation Planning',
      description: 'Plan tree planting to offset emissions from mining operations.',
      icon: <FaTree size={36} className="text-green-600" />,
    },
    {
      title: 'Clean Energy Recommendations',
      description: 'Recommend clean energy solutions for emission reduction.',
      icon: <FaSolarPanel size={36} className="text-yellow-500" />,
    },
    {
      title: 'Gap Analysis',
      description: 'Identify gaps in emission reduction efforts and suggest improvements.',
      icon: <FaSearch size={36} className="text-orange-500" />,
    },
    {
      title: 'Dashboard Development',
      description: 'Build a dashboard to monitor and track emissions over time.',
      icon: <FaRegChartBar size={36} className="text-blue-500" />,
    },
    {
      title: 'Decision Support',
      description: 'Provide actionable insights to aid decision-making for emission reduction.',
      icon: <FaLightbulb size={36} className="text-yellow-600" />,
    },
    {
      title: 'Cost Saving',
      description: 'Identify cost-saving opportunities through improved practices and technologies.',
      icon: <FaDollarSign size={36} className="text-green-700" />,
    },
    {
      title: 'Sustainability Goals',
      description: 'Set and track sustainability goals to ensure long-term environmental impact.',
      icon: <FaLeaf size={36} className="text-green-800" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4 text-center leading-snug">
        Towards Carbon Neutrality
      </h1>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl text-center">
        Our mission is to help coal mines in India quantify their carbon footprint and find sustainable solutions 
        to offset their emissions. By analyzing mining activities and suggesting pathways to carbon neutrality, 
        we aim to support India's climate goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl w-full">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="relative p-8 rounded-xl bg-white shadow-lg border border-black hover:border-blue-500 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            
            <div className="flex justify-center items-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-green-100 to-blue-50 shadow-md flex justify-center items-center">
                {phase.icon}
              </div>
            </div>
           
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">{phase.title}</h3>
           
            <p className="text-gray-600 mb-4 text-center">{phase.description}</p>
            
            <div className="absolute inset-0 rounded-xl bg-opacity-0 hover:bg-blue-50 hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhasesSummary;
**/


import React from 'react';
import { FaDatabase, FaChartLine, FaTree, FaSolarPanel, FaSearch, FaRegChartBar, FaLightbulb, FaDollarSign, FaLeaf } from 'react-icons/fa';

const FeaturesSectionDemo = () => {
  const features = [
    {
      title: 'Data Collection',
      description: 'Gather emission data from mining activities for further analysis.',
      icon: <FaDatabase size={36} className="text-green-500" />,
    },
    {
      title: 'Emission Estimation',
      description: 'Estimate carbon emissions based on collected data.',
      icon: <FaChartLine size={36} className="text-red-500" />,
    },
    {
      title: 'Afforestation Planning',
      description: 'Plan tree planting to offset emissions from mining operations.',
      icon: <FaTree size={36} className="text-green-600" />,
    },
    {
      title: 'Clean Energy Recommendations',
      description: 'Recommend clean energy solutions for emission reduction.',
      icon: <FaSolarPanel size={36} className="text-yellow-500" />,
    },
    {
      title: 'Gap Analysis',
      description: 'Identify gaps in emission reduction efforts and suggest improvements.',
      icon: <FaSearch size={36} className="text-orange-500" />,
    },
    {
      title: 'Dashboard Development',
      description: 'Build a dashboard to monitor and track emissions over time.',
      icon: <FaRegChartBar size={36} className="text-blue-500" />,
    },
    {
      title: 'Decision Support',
      description: 'Provide actionable insights to aid decision-making for emission reduction.',
      icon: <FaLightbulb size={36} className="text-yellow-600" />,
    },
    {
      title: 'Cost Saving',
      description: 'Identify cost-saving opportunities through improved practices and technologies.',
      icon: <FaDollarSign size={36} className="text-green-700" />,
    },
    
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center py-12 px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Key Phases for Achieving Carbon Neutrality
        </h1>
        <p className="text-lg text-gray-700">
          Discover the crucial phases in our approach to achieving carbon neutrality for mining operations. Each phase is designed to help us systematically reduce carbon emissions and make significant strides toward a more sustainable future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={`flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 ${
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800'
      } ${index < 4 && 'lg:border-b dark:border-neutral-800'}`}
    >
      {index < 4 ? (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
        />
      ) : (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
        />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center"
        />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
        >
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10"
      >
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionDemo;


/** 
import React from 'react';
import { FaDatabase, FaChartLine, FaTree, FaSolarPanel, FaExclamationTriangle, FaSearch, FaRegChartBar, FaLightbulb, FaDollarSign, FaLeaf } from 'react-icons/fa';

const PhasesSummary = () => {
  const phases = [
    {
      title: 'Data Collection',
      description: 'Gather emission data from mining activities for further analysis.',
      icon: <FaDatabase size={36} className="text-green-500" />,
    },
    {
      title: 'Emission Estimation',
      description: 'Estimate carbon emissions based on collected data.',
      icon: <FaChartLine size={36} className="text-red-500" />,
    },
    {
      title: 'Afforestation Planning',
      description: 'Plan tree planting to offset emissions from mining operations.',
      icon: <FaTree size={36} className="text-green-600" />,
    },
    {
      title: 'Clean Energy Recommendations',
      description: 'Recommend clean energy solutions for emission reduction.',
      icon: <FaSolarPanel size={36} className="text-yellow-500" />,
    },
    {
      title: 'Gap Analysis',
      description: 'Identify gaps in emission reduction efforts and suggest improvements.',
      icon: <FaSearch size={36} className="text-orange-500" />,
    },
    {
      title: 'Dashboard Development',
      description: 'Build a dashboard to monitor and track emissions over time.',
      icon: <FaRegChartBar size={36} className="text-blue-500" />,
    },
    {
      title: 'Decision Support',
      description: 'Provide actionable insights to aid decision-making for emission reduction.',
      icon: <FaLightbulb size={36} className="text-yellow-600" />,
    },
    {
      title: 'Cost Saving',
      description: 'Identify cost-saving opportunities through improved practices and technologies.',
      icon: <FaDollarSign size={36} className="text-green-700" />,
    },
    {
      title: 'Sustainability Goals',
      description: 'Set and track sustainability goals to ensure long-term environmental impact.',
      icon: <FaLeaf size={36} className="text-green-800" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4 text-center leading-snug">
        Towards Carbon Neutrality
      </h1>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl text-center">
        Our mission is to help coal mines in India quantify their carbon footprint and find sustainable solutions 
        to offset their emissions. By analyzing mining activities and suggesting pathways to carbon neutrality, 
        we aim to support India's climate goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl w-full">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="relative p-8 rounded-xl bg-white shadow-lg border border-black hover:border-blue-500 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
           
            <div className="flex justify-center items-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-green-100 to-blue-50 shadow-md flex justify-center items-center">
                {phase.icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">{phase.title}</h3>
            
            <p className="text-gray-600 mb-4 text-center">{phase.description}</p>
            
            <div className="absolute inset-0 rounded-xl bg-opacity-0 hover:bg-blue-50 hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhasesSummary;


**/
  




