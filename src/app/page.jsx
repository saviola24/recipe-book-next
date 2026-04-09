import RecipeListClient from '../components/RecipeList/RecipeListClient'
import recipes from '../data/recipes.json'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>
        </div>
      </header>
      <main className={styles.main}>
        <RecipeListClient initialRecipes={recipes} />
      </main>
    </div>
  )
}

