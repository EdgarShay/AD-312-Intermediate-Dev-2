import { Link } from "react-router";
import { recipes } from "../data/recipes";

export default function Gallery() {
    return (
        <div className="page">
            <h2>Recipe Gallery</h2>

            <div className="recipes-grid">
                {recipes.map((recipe) => (
                    <div className="recipe-card" key={recipe.id}>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                        />

                        <h3>{recipe.title}</h3>

                        <Link
                            to={`/recipe/${recipe.id}`}
                            className="view-btn"
                        >
                            View Recipe
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}