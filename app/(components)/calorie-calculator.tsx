'use client'

import { useState } from 'react';

export const CalorieCalculator = () => {
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [bmr, setBmr] = useState(0);

  const calculateBMR = () => {
    let result = 0;
    if (gender === 'female') {
      result = 655.1 + (9.563 * parseFloat(weight)) + (1.85 * parseFloat(height)) - (4.676 * parseFloat(age));
    } else {
      result = 66.47 + (13.75 * parseFloat(weight)) + (5.003 * parseFloat(height)) - (6.755 * parseFloat(age));
    }
    result *= parseFloat(activityLevel);
    setBmr(Math.round(result));
  };

  return (
    <div className="mt-8 p-6 bg-black rounded-lg">
      <h3 className="text-xl font-bold mb-4">Calculator Necesar Caloric</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Gen:</label>
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          >
            <option value="female">Feminin</option>
            <option value="male">Masculin</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Greutate (kg):</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Înălțime (cm):</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Vârstă:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-2">Nivel de activitate:</label>
          <select 
            value={activityLevel} 
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full p-2 bg-gray-800 rounded"
          >
            <option value="1.2">Sedentar (0-1 antrenamente/săptămână)</option>
            <option value="1.37">Activitate ușoară (1-3 antrenamente/săptămână)</option>
            <option value="1.55">Activitate moderată (3-5 antrenamente/săptămână)</option>
            <option value="1.72">Activitate foarte activă (6-7 antrenamente/săptămână)</option>
            <option value="1.9">Activitate extremă (sportivi de performanță)</option>
          </select>
        </div>
      </div>
      <button 
        onClick={calculateBMR}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold"
      >
        Calculează
      </button>
      {bmr > 0 && (
        <div className="mt-4">
          <p className="text-lg">Necesarul tău caloric zilnic este aproximativ: <strong>{bmr} calorii</strong></p>
        </div>
      )}
    </div>
  );
};