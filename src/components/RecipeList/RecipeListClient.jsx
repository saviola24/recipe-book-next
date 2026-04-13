'use client'

import { useState } from 'react'
import styles from './recipeListClient.module.css'
// import recipeList from './RecipeList'

export default function RecipeListClient({ initialRecipes }) {
  const [orderedRecipes, setOrderedRecipes] = useState(initialRecipes)

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse())
  }

  return (
    <>
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.toggle}
          onClick={handleToggleOrder}
        >
          Reverse order
        </button>
      </div>
      <recipeList recipes={orderedRecipes} />
    </>
  )
}