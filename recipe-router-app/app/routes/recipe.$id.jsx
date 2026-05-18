import { Link, useParams } from "react-router";

import { recipes } from "../data/recipes";

export default function RecipeDetail() {

    const { id } = useParams();

    const recipe = recipes.find(
        (recipe) => recipe.id === Number(id)
    );

    if (!recipe) {
        return (
            <div className="not-found">

                <h2>Recipe Not Found</h2>

                <p>
                    The recipe you are looking for does not exist.
                </p>

                <Link to="/gallery" className="view-btn">
                    Back to Gallery
                </Link>

            </div>
        );
    }

    return (
        <div className="recipe-detail">

            <img
                src={recipe.image}
                alt={recipe.title}
            />

            <div className="recipe-info">

                <span className="recipe-tag">
                    Popular Recipe
                </span>

                <h2>{recipe.title}</h2>

                <h3>Cooking Instructions</h3>

                <p>{recipe.instructions}</p>

                <Link to="/gallery" className="view-btn">
                    Back to Gallery
                </Link>

            </div>
        </div>
    );
}