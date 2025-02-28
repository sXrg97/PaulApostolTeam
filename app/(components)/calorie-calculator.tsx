'use client'

import { useState } from 'react';

export const CalorieCalculator = () => {
  const [gender, setGender] = useState('female');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [bmr, setBmr] = useState(0);
  const [error, setError] = useState('');

  const calculateBMR = () => {
    // Reset previous results and errors
    setBmr(0);
    setError('');
    
    // Validate all required fields
    if (!weight || !height || !age) {
      setError('Te rugăm să completezi toate câmpurile pentru a calcula necesarul caloric.');
      return;
    }
    
    // Validate input values
    if (parseFloat(weight) <= 0 || parseFloat(height) <= 0 || parseFloat(age) <= 0) {
      setError('Te rugăm să introduci valori pozitive pentru greutate, înălțime și vârstă.');
      return;
    }

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
    <div className="mt-10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-800 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 bg-red-600 rounded-full"></div>
        <h3 className="text-2xl font-bold text-white">Calculator Necesar Caloric</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div>
          <label className="block mb-2 text-zinc-300 font-medium">Gen:</label>
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 bg-zinc-800/70 border border-zinc-700 rounded-lg focus:ring-red-500 focus:border-red-500 outline-none transition-all"
          >
            <option value="female">Feminin</option>
            <option value="male">Masculin</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-zinc-300 font-medium">Greutate (kg):</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 bg-zinc-800/70 border border-zinc-700 rounded-lg focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            placeholder="Introdu greutatea"
          />
        </div>
        <div>
          <label className="block mb-2 text-zinc-300 font-medium">Înălțime (cm):</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 bg-zinc-800/70 border border-zinc-700 rounded-lg focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            placeholder="Introdu înălțimea"
          />
        </div>
        <div>
          <label className="block mb-2 text-zinc-300 font-medium">Vârstă:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 bg-zinc-800/70 border border-zinc-700 rounded-lg focus:ring-red-500 focus:border-red-500 outline-none transition-all"
            placeholder="Introdu vârsta"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-2 text-zinc-300 font-medium">Nivel de activitate:</label>
          <select 
            value={activityLevel} 
            onChange={(e) => setActivityLevel(e.target.value)}
            className="w-full p-3 bg-zinc-800/70 border border-zinc-700 rounded-lg focus:ring-red-500 focus:border-red-500 outline-none transition-all"
          >
            <option value="1.2">Sedentar (0-1 antrenamente/săptămână)</option>
            <option value="1.37">Activitate ușoară (1-3 antrenamente/săptămână)</option>
            <option value="1.55">Activitate moderată (3-5 antrenamente/săptămână)</option>
            <option value="1.72">Activitate foarte activă (6-7 antrenamente/săptămână)</option>
            <option value="1.9">Activitate extremă (sportivi de performanță)</option>
          </select>
        </div>
      </div>
      
      {error && (
        <div className="mt-6 p-4 bg-red-900/30 border border-red-800 rounded-lg relative z-10">
          <p className="text-red-300">{error}</p>
        </div>
      )}
      
      <button 
        onClick={calculateBMR}
        className="mt-8 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg w-full md:w-auto transition-all duration-300 hover:shadow-lg hover:shadow-red-700/30 relative z-10"
      >
        Calculează
      </button>
      
      {bmr > 0 && (
        <div className="mt-6 p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg relative z-10">
          <p className="text-lg text-white">
            Necesarul tău caloric zilnic este aproximativ: 
            <span className="ml-2 font-bold text-red-500 text-xl">{bmr} calorii</span>
          </p>
        </div>
      )}
    </div>
  );
};