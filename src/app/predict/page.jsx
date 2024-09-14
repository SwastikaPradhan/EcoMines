/**"use client";
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';


export default function PredictPage() {
  const [formData, setFormData] = useState({
    EqE_C: '',
    EE_C: '',
    ME_C: '',
    S3E_C: '',
    EC: '',
    FC: '',
  });

  const [fetchedData, setFetchedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Firebase query based on the user's input
    const emissionsQuery = query(
      collection(db, 'emissions'), // Replace 'emissions' with your actual Firestore collection
      where('EqE_C', '==', formData.EqE_C),
      where('EE_C', '==', formData.EE_C),
      where('ME_C', '==', formData.ME_C),
      where('S3E_C', '==', formData.S3E_C),
      where('EC', '==', formData.EC),
      where('FC', '==', formData.FC)
    );

    try {
      const querySnapshot = await getDocs(emissionsQuery);
      const fetchedData = querySnapshot.docs.map((doc) => doc.data());
      setFetchedData(fetchedData);
      console.log('Fetched data:', fetchedData);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="text-center text-2xl font-bold mb-8">Enter Today's Emissions</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="EqE_C">Equipment Emissions:</label>
          <input
            type="number"
            id="EqE_C"
            name="EqE_C"
            placeholder="Enter the value for Equipment Emissions"
            value={formData.EqE_C}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="EE_C">Electrical Emissions:</label>
          <input
            type="number"
            id="EE_C"
            name="EE_C"
            placeholder="Enter the value for Electrical Emissions"
            value={formData.EE_C}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ME_C">Methane Emissions:</label>
          <input
            type="number"
            id="ME_C"
            name="ME_C"
            placeholder="Enter the value for Methane Emissions"
            value={formData.ME_C}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="S3E_C">Scope 3 Emissions:</label>
          <input
            type="number"
            id="S3E_C"
            name="S3E_C"
            placeholder="Enter the value for Scope 3 Emissions"
            value={formData.S3E_C}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="EC">Energy Consumption:</label>
          <input
            type="number"
            id="EC"
            name="EC"
            placeholder="Enter the value for Energy Consumption"
            value={formData.EC}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="FC">Fuel Consumption:</label>
          <input
            type="number"
            id="FC"
            name="FC"
            placeholder="Enter the value for Fuel Consumption"
            value={formData.FC}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {fetchedData && (
        <div className="fetched-data">
          <h2>Fetched Data:</h2>
          {fetchedData.map((data, index) => (
            <div key={index}>
              <p>Equipment Emissions: {data.EqE_C}</p>
              <p>Electrical Emissions: {data.EE_C}</p>
              <p>Methane Emissions: {data.ME_C}</p>
              <p>Scope 3 Emissions: {data.S3E_C}</p>
              <p>Energy Consumption: {data.EC}</p>
              <p>Fuel Consumption: {data.FC}</p>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #050505;
          padding: 20px;
        }

        .form-container {
          max-width: 500px;
          width: 100%;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color:#000;
          background-color:#fff;

        }

        .submit-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .submit-button:hover {
          background-color: #005bb5;
        }

        .fetched-data {
          margin-top: 20px;
          background-color: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .fetched-data p {
          margin: 0;
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
}
**/





/** 
"use client";
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';


export default function PredictPage() {
  const [formData, setFormData] = useState({
    EquipmentEmissions: '',
    ElectricalEmissions: '',
    MethaneEmissions: '',
    Scope3Emissions: '',
    EnergyConsumption: '',
    FC: '',
    state: '' 
  });

  const [fetchedData, setFetchedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Firebase query based on the user's input
    const emissionsQuery = query(
      collection(db, 'emissions'), // Replace 'emissions' with your actual Firestore collection
      where('EqE_C', '==', formData.EqE_C),
      where('EE_C', '==', formData.EE_C),
      where('ME_C', '==', formData.ME_C),
      where('S3E_C', '==', formData.S3E_C),
      where('EC', '==', formData.EC),
      where('FC', '==', formData.FC),
      where('state', '==', formData.state) // Add state to query
    );

    try {
      const querySnapshot = await getDocs(emissionsQuery);
      const fetchedData = querySnapshot.docs.map((doc) => doc.data());
      setFetchedData(fetchedData);
      console.log('Fetched data:', fetchedData);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="text-center text-2xl font-bold mb-8">Enter Today's Emissions</h1>
      <form onSubmit={handleSubmit} className="form-container">
      
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select the state name</option>
            <option value="Odisha">Odisha</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="EqE_C">Equipment Emissions:</label>
          <input
            type="number"
            id="EqE_C"
            name="EqE_C"
            placeholder="Enter the value for Equipment Emissions"
            value={formData.EqE_C}
            onChange={handleChange}
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="EE_C">Electrical Emissions:</label>
          <input
            type="number"
            id="EE_C"
            name="EE_C"
            placeholder="Enter the value for Electrical Emissions"
            value={formData.EE_C}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ME_C">Methane Emissions:</label>
          <input
            type="number"
            id="ME_C"
            name="ME_C"
            placeholder="Enter the value for Methane Emissions"
            value={formData.ME_C}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="S3E_C">Scope 3 Emissions:</label>
          <input
            type="number"
            id="S3E_C"
            name="S3E_C"
            placeholder="Enter the value for Scope 3 Emissions"
            value={formData.S3E_C}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="EC">Energy Consumption:</label>
          <input
            type="number"
            id="EC"
            name="EC"
            placeholder="Enter the value for Energy Consumption"
            value={formData.EC}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="FC">Fuel Consumption:</label>
          <input
            type="number"
            id="FC"
            name="FC"
            placeholder="Enter the value for Fuel Consumption"
            value={formData.FC}
            onChange={handleChange}
            required
          />
        </div>

        

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {fetchedData && (
  <div className="fetched-data">
    <h2>Fetched Data:</h2>
    {fetchedData.length > 0 ? (
      fetchedData.map((data, index) => (
        <div key={index}>
          <p>State: {data.state}</p>
          <p>Equipment Emissions: {data.EqE_C}</p>
          <p>Electrical Emissions: {data.EE_C}</p>
          <p>Methane Emissions: {data.ME_C}</p>
          <p>Scope 3 Emissions: {data.S3E_C}</p>
          <p>Energy Consumption: {data.EC}</p>
          <p>Fuel Consumption: {data.FC}</p>
        </div>
      ))
    ) : (
      <p>No data found for the provided criteria.</p>
    )}
  </div>
)}

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #050505;
          padding: 20px;
        }

        .form-container {
          max-width: 500px;
          width: 100%;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        select, input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #000;
          background-color: #fff;
        }

        .submit-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .submit-button:hover {
          background-color: #005bb5;
        }

        .fetched-data {
          margin-top: 20px;
          background-color: white;
          padding: 15px;
          border-radius: 8px;
          color:#000;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .fetched-data p {
          margin: 0;
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
}
**/


"use client";
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function PredictPage() {
  const [formData, setFormData] = useState({
    EquipmentEmissions: '',
    ElectricalEmissions: '',
    MethaneEmissions: '',
    Scope3Emissions: '',
    EnergyConsumption: '',
    FC: '',
    state: '' 
  });

  const [fetchedData, setFetchedData] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  /**const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Firebase query based on the user's input
    const emissionsQuery = query(
      collection(db, 'emissions'), // Ensure 'emissions' is the correct collection name
      where('EquipmentEmissions', '==', formData.EquipmentEmissions),
      where('ElectricalEmissions', '==', formData.ElectricalEmissions),
      where('MethaneEmissions', '==', formData.MethaneEmissions),
      where('Scope3Emissions', '==', formData.Scope3Emissions),
      where('EnergyConsumption', '==', formData.EnergyConsumption),
      where('FC', '==', formData.FC),
      where('state', '==', formData.state) // Add state to query
    );

    try {
      const querySnapshot = await getDocs(emissionsQuery);
      const fetchedData = querySnapshot.docs.map((doc) => doc.data());
      setFetchedData(fetchedData);
      console.log('Fetched data:', fetchedData);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  };**/

 // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Form data submitted:', formData);

  // Firebase query based on the user's input
  const emissionsQuery = query(
    collection(db, 'emissions'), // Ensure 'emissions' is the correct collection name
    where('EquipmentEmissions', '==', formData.EquipmentEmissions),
    where('ElectricalEmissions', '==', formData.ElectricalEmissions),
    where('MethaneEmissions', '==', formData.MethaneEmissions),
    where('Scope3Emissions', '==', formData.Scope3Emissions),
    where('EnergyConsumption', '==', formData.EnergyConsumption),
    where('FC', '==', formData.FC),
    where('state', '==', formData.state) // Add state to query
  );

  try {
    const querySnapshot = await getDocs(emissionsQuery);
    const fetchedData = querySnapshot.docs.map((doc) => doc.data()); // Ensure 'doc' is defined in the scope
    setFetchedData(fetchedData);
    console.log('Fetched data:', fetchedData);
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
  }
};

  

  return (
    <div className="page-container">
      <h1 className="text-center text-2xl font-bold mb-8">Enter Today's Emissions</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select the state name</option>
            <option value="Odisha">Odisha</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Telangana">Telangana</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="EquipmentEmissions">Equipment Emissions:</label>
          <input
            type="number"
            id="EquipmentEmissions"
            name="EquipmentEmissions"
            placeholder="Enter the value for Equipment Emissions"
            value={formData.EquipmentEmissions}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ElectricalEmissions">Electrical Emissions:</label>
          <input
            type="number"
            id="ElectricalEmissions"
            name="ElectricalEmissions"
            placeholder="Enter the value for Electrical Emissions"
            value={formData.ElectricalEmissions}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="MethaneEmissions">Methane Emissions:</label>
          <input
            type="number"
            id="MethaneEmissions"
            name="MethaneEmissions"
            placeholder="Enter the value for Methane Emissions"
            value={formData.MethaneEmissions}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Scope3Emissions">Scope 3 Emissions:</label>
          <input
            type="number"
            id="Scope3Emissions"
            name="Scope3Emissions"
            placeholder="Enter the value for Scope 3 Emissions"
            value={formData.Scope3Emissions}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="EnergyConsumption">Energy Consumption:</label>
          <input
            type="number"
            id="EnergyConsumption"
            name="EnergyConsumption"
            placeholder="Enter the value for Energy Consumption"
            value={formData.EnergyConsumption}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="FC">Fuel Consumption:</label>
          <input
            type="number"
            id="FC"
            name="FC"
            placeholder="Enter the value for Fuel Consumption"
            value={formData.FC}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {fetchedData.length > 0 && (
        <div className="fetched-data">
          <h2>Fetched Data:</h2>
          {fetchedData.map((data, index) => (
            <div key={index}>
              <p>State: {data.state}</p>
              <p>Equipment Emissions: {data.EquipmentEmissions}</p>
              <p>Electrical Emissions: {data.ElectricalEmissions}</p>
              <p>Methane Emissions: {data.MethaneEmissions}</p>
              <p>Scope 3 Emissions: {data.Scope3Emissions}</p>
              <p>Energy Consumption: {data.EnergyConsumption}</p>
              <p>Fuel Consumption: {data.FC}</p>
            </div>
          ))}
        </div>
      )}

      {fetchedData.length === 0 && (
        <p>No data found for the provided criteria.</p>
      )}

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #050505;
          padding: 20px;
        }

        .form-container {
          max-width: 500px;
          width: 100%;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
        }

        select, input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #000;
          background-color: #fff;
        }

        .submit-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .submit-button:hover {
          background-color: #005bb5;
        }

        .fetched-data {
          margin-top: 20px;
          background-color: white;
          padding: 15px;
          border-radius: 8px;
          color: #000;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .fetched-data p {
          margin: 0;
          padding: 5px 0;
        }
      `}</style>
    </div>
  );
}

