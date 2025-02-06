import React, { useState } from 'react';

const CalorieCounter: React.FC = () => {
  // Список продуктов с калорийностью (калории на 100 грамм)
  const foodItems = [
    { name: 'Яблоко', calories: 52 },
  { name: 'Банан', calories: 89 },
  { name: 'Хлеб', calories: 265 },
  { name: 'Молоко', calories: 42 },
  { name: 'Яйцо', calories: 155 },
  { name: 'Апельсин', calories: 47 },
  { name: 'Груша', calories: 57 },
  { name: 'Виноград', calories: 69 },
  { name: 'Клубника', calories: 32 },
  { name: 'Мандарин', calories: 53 },
  { name: 'Персик', calories: 39 },
  { name: 'Абрикос', calories: 48 },
  { name: 'Слива', calories: 46 },
  { name: 'Арбуз', calories: 30 },
  { name: 'Дыня', calories: 34 },
  { name: 'Ананас', calories: 50 },
  { name: 'Манго', calories: 60 },
  { name: 'Киви', calories: 61 },
  { name: 'Грейпфрут', calories: 42 },
  { name: 'Лимон', calories: 29 },
  { name: 'Картофель', calories: 77 },
  { name: 'Морковь', calories: 41 },
  { name: 'Огурец', calories: 16 },
  { name: 'Помидор', calories: 18 },
  { name: 'Лук', calories: 40 },
  { name: 'Чеснок', calories: 149 },
  { name: 'Капуста', calories: 25 },
  { name: 'Брокколи', calories: 34 },
  { name: 'Цветная капуста', calories: 25 },
  { name: 'Кабачок', calories: 17 },
  { name: 'Баклажан', calories: 25 },
  { name: 'Тыква', calories: 26 },
  { name: 'Свекла', calories: 43 },
  { name: 'Редис', calories: 16 },
  { name: 'Зелёный горошек', calories: 81 },
  { name: 'Кукуруза', calories: 86 },
  { name: 'Фасоль', calories: 333 },
  { name: 'Чечевица', calories: 116 },
  { name: 'Гречка', calories: 343 },
  { name: 'Рис', calories: 130 },
  { name: 'Овсянка', calories: 68 },
  { name: 'Макароны', calories: 131 },
  { name: 'Хлеб ржаной', calories: 259 },
  { name: 'Хлеб пшеничный', calories: 265 },
  { name: 'Булочка сдобная', calories: 339 },
  { name: 'Печенье овсяное', calories: 437 },
  { name: 'Шоколад молочный', calories: 546 },
  { name: 'Шоколад тёмный', calories: 546 },
  { name: 'Мёд', calories: 304 },
  { name: 'Сахар', calories: 387 },
  { name: 'Масло сливочное', calories: 717 },
  { name: 'Масло подсолнечное', calories: 884 },
  { name: 'Сыр твёрдый', calories: 402 },
  { name: 'Сыр плавленый', calories: 300 },
  { name: 'Творог', calories: 159 },
  { name: 'Сметана', calories: 193 },
  { name: 'Йогурт натуральный', calories: 59 },
  { name: 'Кефир', calories: 41 },
  { name: 'Ряженка', calories: 54 },
  { name: 'Сливки', calories: 340 },
  { name: 'Мороженое', calories: 207 },
  { name: 'Курица', calories: 165 },
  { name: 'Говядина', calories: 250 },
  { name: 'Свинина', calories: 242 },
  { name: 'Баранина', calories: 294 },
  { name: 'Индейка', calories: 189 },
  { name: 'Утка', calories: 337 },
  { name: 'Кролик', calories: 173 },
  { name: 'Рыба лосось', calories: 208 },
  { name: 'Рыба треска', calories: 82 },
  { name: 'Рыба сельдь', calories: 158 },
  { name: 'Креветки', calories: 99 },
  { name: 'Кальмар', calories: 100 },
  { name: 'Мидии', calories: 172 },
  { name: 'Яйцо перепелиное', calories: 158 },
  { name: 'Омлет', calories: 154 },
  { name: 'Салат Цезарь', calories: 368 },
  { name: 'Салат Греческий', calories: 128 },
  { name: 'Суп куриный', calories: 120 },
  { name: 'Суп грибной', calories: 80 },
  { name: 'Борщ', calories: 150 },
  { name: 'Пицца', calories: 266 },
  { name: 'Бургер', calories: 295 },
  { name: 'Картофель фри', calories: 312 },
  { name: 'Чипсы', calories: 536 },
  { name: 'Попкорн', calories: 387 },
  { name: 'Орехи грецкие', calories: 654 },
  { name: 'Орехи миндаль', calories: 579 },
  { name: 'Орехи арахис', calories: 567 },
  { name: 'Семечки подсолнечные', calories: 584 },
  { name: 'Сухофрукты', calories: 359 },
  { name: 'Изюм', calories: 299 },
  { name: 'Чернослив', calories: 240 },
  { name: 'Курага', calories: 241 },
  { name: 'Финики', calories: 282 },
  { name: 'Кофе', calories: 0 },
  { name: 'Чай', calories: 0 },
  { name: 'Сок апельсиновый', calories: 45 },
  { name: 'Сок яблочный', calories: 46 },
  { name: 'Газировка', calories: 38 },
  { name: 'Пиво', calories: 43 },
  { name: 'Вино красное', calories: 68 },
  { name: 'Вино белое', calories: 82 },
  ];

  const [selectedFood, setSelectedFood] = useState<string>(foodItems[0].name);
  const [quantity, setQuantity] = useState<number>(100); // Количество в граммах
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [history, setHistory] = useState<{ food: string; calories: number }[]>([]);

  // Обработчик добавления продукта
  const addFood = () => {
    const food = foodItems.find((item) => item.name === selectedFood);
    if (food) {
      const calories = (food.calories * quantity) / 100;
      setTotalCalories(totalCalories + calories);
      setHistory([...history, { food: selectedFood, calories }]);
    }
  };

  // Обработчик сброса
  const resetCounter = () => {
    setTotalCalories(0);
    setHistory([]);
  };

  return (
    <div className="calorie-counter">
      <h2>Подсчет калорий</h2>
      <div>
        <label>Выберите продукт: </label>
        <select
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          {foodItems.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name} ({item.calories} ккал/100г)
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Количество (граммы): </label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
          min="1"
        />
      </div>
      <button onClick={addFood}>Добавить продукт</button>
      <button className='but' onClick={resetCounter}>Сбросить</button>
      <h3>Общее количество калорий: {totalCalories.toFixed(2)} </h3>
      <div>
        <h4>История:</h4>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.food}: {entry.calories.toFixed(2)} ккал
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalorieCounter;