'use client';

import { useState, useMemo } from 'react';
import recipes from '../data/recipes.json';
import styles from '../components/App.module.css';
import RecipeList from '../components/RecipeList/RecipeList.jsx';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isReversed, setIsReversed] = useState(false);

  const categories = useMemo(() => {
    if (!recipes || recipes.length === 0) return ['All'];
    return ['All', ...new Set(recipes.map(recipe => recipe.category))];
  }, []);

  const displayedRecipes = useMemo(() => {
    let result = recipes.filter(recipe => {
      return selectedCategory === 'All' || recipe.category === selectedCategory;
    });

    if (isReversed) {
      result = [...result].reverse();
    }

    return result;
  }, [selectedCategory, isReversed]);

  const handleToggleOrder = () => {
    setIsReversed(prev => !prev);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            {isReversed ? 'Order Normal' : 'Reverse Order'}
          </button>
        </div>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.activeFilter : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <main className={styles.main}>
        <RecipeList recipes={displayedRecipes} />
      </main>
    </div>
  );
}