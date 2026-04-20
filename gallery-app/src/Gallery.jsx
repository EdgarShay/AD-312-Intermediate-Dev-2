import { useState } from "react";
import "./Gallery.css";

export const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600",
    description: "Pasta Recipe",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    description: "Healthy Salad",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    description: "Burger Meal",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="gallery">
      <h2>Recipe Gallery</h2>

      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].description}
      />

      <p>{images[currentIndex].description}</p>

      <div className="buttons">
        <button onClick={prevImage} disabled={currentIndex === 0}>
          Previous
        </button>

        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}