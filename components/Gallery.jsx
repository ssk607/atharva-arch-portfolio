"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Gallery({ images = [] }) {
  const [current, setCurrent] = useState(0);

  if (!images.length) {
    return <p>No images found.</p>;
  }

  const previousImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery-container">

      <button
        className="gallery-arrow left-arrow"
        onClick={() => scrollSlides(-1)}
      >
        <FiChevronLeft size={28} />
      </button>
      
      <img
        src={images[current]}
        alt={`Project ${current + 1}`}
        className="gallery-image"
      />

      <button
        className="gallery-arrow right-arrow"
        onClick={() => scrollSlides(1)}
      >
        <FiChevronRight size={28} />
      </button>

      <div className="gallery-counter">
        {current + 1} / {images.length}
      </div>

    </section>
  );
}