import React, { useState, useEffect } from 'react';
import IMTCalculator from './components/IMTCalculator';
import BodyComposition from './components/BodyComposition';
import CalorieCounter from './components/CalorieCounter';
import RecipesPage from './components/RecipesPage';
import MassGainRecipes from './components/MassGainRecipes';
import MaintenanceRecipes from './components/MaintenanceRecipes';
import './styles.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isLoading, setIsLoading] = useState(true);

  // Анимация загрузки
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Имитация загрузки в течение 2 секунд
    return () => clearTimeout(timer);
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className="app">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
        </button>
        <h1>Фитнес-приложение</h1>
        <IMTCalculator />
        <BodyComposition />
        <CalorieCounter />
        <RecipesPage />
        <MassGainRecipes />
        <MaintenanceRecipes />
      </div>
    </>
  );
};

export default App;