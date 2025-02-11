import React, { useState } from 'react';

const MaintenanceRecipes: React.FC = () => {
  const [recipe, setRecipe] = useState<string>('');

  // Массив с рецептами для сохранения массы
  const maintenanceRecipes = [
    "Куриный салат с киноа: Смешайте отварную курицу, киноа, огурцы, помидоры и зелень.",
    "Рыба на пару с овощами: Приготовьте рыбу на пару с брокколи и морковью.",
    "Тушеная фасоль с овощами: Потушите фасоль с луком, морковью и томатным соусом.",
    "Омлет с овощами: Взбейте яйца и обжарьте с болгарским перцем, помидорами и шпинатом.",
    "Суп из чечевицы: Сварите суп из чечевицы, моркови, лука и сельдерея.",
    "Греческий йогурт с фруктами: Смешайте греческий йогурт с нарезанными фруктами.",
    "Запеченные овощи: Запеките кабачки, баклажаны и перец в духовке с оливковым маслом.",
    "Куриные котлеты с овощным рагу: Приготовьте куриные котлеты и подавайте с тушеными овощами.",
    "Салат из тунца: Смешайте консервированный тунец, яйца, огурцы и зелень.",
    "Овощной суп-пюре: Приготовьте суп-пюре из тыквы, моркови и картофеля.",
  ];

  const fetchRecipe = () => {
    const randomIndex = Math.floor(Math.random() * maintenanceRecipes.length);
    setRecipe(maintenanceRecipes[randomIndex]);
  };

  return (
    <div className="recipes-page">
      <h2>Сохранения массы</h2>
      <button onClick={fetchRecipe}>Получить рецепт</button>
      {recipe && <p>{recipe}</p>}
    </div>
  );
};

export default MaintenanceRecipes;