import React, { useState } from 'react';

const IMTCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [imt, setImt] = useState<number | null>(null);

  const calculateIMT = () => {
    if (weight > 0 && height > 0) {
      const heightMeters = height / 100;
      const imtValue = weight / (heightMeters * heightMeters);
      setImt(parseFloat(imtValue.toFixed(2)));
    }
  };

  return (
    <div className="calculator">
      <h2>Калькулятор ИМТ</h2>
      <div>
        <label className='cvet'>Вес (кг): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Рост (см): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateIMT}>Рассчитать ИМТ</button>
      {imt && <p className='cvet' >Ваш ИМТ: {imt}</p>}
    </div>
  );
};

export default IMTCalculator;