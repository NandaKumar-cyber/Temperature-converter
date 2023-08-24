import React, { useState, useEffect } from 'react';

function Temperature() {
  const [temperature, setTemperature] = useState<string>('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperature, setConvertedTemperature] = useState<string>('');

  useEffect(() => {
    convertTemperature(temperature);
  });

  const handleTemperatureChange = (event) => {
    const value = event.target.value;
    setTemperature(value);
    convertTemperature(value);
    console.log(value, "value entered")
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    console.log(newUnit, "newUnit")
  };

  const convertTemperature = (value: string) => {
    if (!value) {
      setConvertedTemperature('');
      return;
    }

    const convertedValue =
      unit === 'Celsius'
        ? ((parseFloat(value) * 9) / 5 + 32).toFixed(2)
        : (((parseFloat(value) - 32) * 5) / 9).toFixed(2);
    console.log(convertedValue);
    setConvertedTemperature(
      `${value} ${unit} is approximately ${convertedValue} ${unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'
      }`
    );
  };

  const handleSwapClick = () => {
    const newUnit = unit === 'Celsius' ? 'Fahrenheit' : 'Celsius';
    handleUnitChange(newUnit); // Update the unit
    convertTemperature(temperature); // Reconvert with the new unit
  };

  return (
    <div className="main">
      <h1>Temperature Converter</h1>
      <div>
        <input
          type="text"
          placeholder="Enter temperature"
          value={temperature}
          onChange={handleTemperatureChange}
        />
        <label>
          <input
            type="radio"
            name="unit"
            value="Celsius"
            checked={unit === 'Celsius'}
            onChange={() => handleUnitChange('Celsius')}
          />
          Celsius

        </label>
        <label>
          <input
            type="radio"
            name="unit"
            value="Fahrenheit"
            checked={unit === 'Fahrenheit'}
            onChange={() => handleUnitChange('Fahrenheit')}
          />
          Fahrenheit
        </label>
        <button onClick={handleSwapClick} style={{ margin: "20px" }}>Swap</button>
      </div>
      {convertedTemperature && <p>{convertedTemperature}</p>}
    </div>
  );
}

export default Temperature;
