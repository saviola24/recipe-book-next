'use client'

import { useState } from 'react'
import RecipeList from './RecipeList'
import styles from './RecipeListClient.module.css'

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
      <RecipeList recipes={orderedRecipes} />
    </>
  )
}