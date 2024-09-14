// pages/Predictive.jsx
/**import { useState } from 'react';
import axios from 'axios';

const Predictive = () => {
  const [features, setFeatures] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e, index) => {
    const newFeatures = [...features];
    newFeatures[index] = e.target.value;
    setFeatures(newFeatures);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { features });
      setPrediction(response.data.prediction);
    } catch (err) {
      setError('Error occurred while predicting');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Prediction Form</h1>
      <form onSubmit={handleSubmit}>
        {features.map((feature, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Feature {index + 1}</label>
            <input
              type="number"
              value={feature}
              onChange={(e) => handleChange(e, index)}
              className="mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {prediction !== null && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Prediction</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default Predictive; **/
