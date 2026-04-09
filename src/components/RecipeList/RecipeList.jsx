import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './RecipeList.module.css';

export default function RecipeList({ recipes }) {
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe, index) => (
        <RecipeCard 
          key={recipe.id || index}   // mieux d'utiliser recipe.id si disponible
          recipe={recipe} 
        />
      ))}
    </div>
  );
}