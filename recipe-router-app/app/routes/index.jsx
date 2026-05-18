import { Link } from "react-router";

export default function Home() {
  return (
    <div className="hero-section">

      <h1>Welcome to Recipe Gallery</h1>

      <p>
        Discover delicious meals with React Router dynamic routing.
      </p>

      <Link to="/gallery" className="hero-btn">
        Explore Recipes
      </Link>

    </div>
  );
}