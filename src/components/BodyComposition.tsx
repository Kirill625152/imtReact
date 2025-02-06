import React, { useState } from 'react';

const BodyComposition: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [boneMass, setBoneMass] = useState<number>(0);
  const [fatPercentage, setFatPercentage] = useState<number>(0);
  const [waterPercentage, setWaterPercentage] = useState<number>(0);

  const calculateComposition = () => {
    
    const calculatedBoneMass = weight * 0.15; // 15% от веса
    const calculatedFatPercentage = weight * 0.2; // 20% от веса
    const calculatedWaterPercentage = weight * 0.6; // 60% от веса

    setBoneMass(parseFloat(calculatedBoneMass.toFixed(2)));
    setFatPercentage(parseFloat(calculatedFatPercentage.toFixed(2)));
    setWaterPercentage(parseFloat(calculatedWaterPercentage.toFixed(2)));
  };

  return (
    <div className="calculator">
      <h2>Состав тела</h2>
      <div>
        <label>Вес (кг): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateComposition}>Рассчитать</button>
      {boneMass > 0 && (
        <div>
          <p>Костная масса: {boneMass} кг</p>
          <p>Процент жира: {fatPercentage}%</p>
          <p>Процент воды: {waterPercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default BodyComposition;