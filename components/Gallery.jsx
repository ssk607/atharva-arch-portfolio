"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Gallery({ images = [] }) {
  console.log(images);

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
    <section
      className="gallery-container"
      style={{
        border: "5px solid red",
        minHeight: "500px",
        background: "#ddd",
      }}
    >

      <button
        className="gallery-arrow left-arrow"
        onClick={previousImage}
      >
        <FiChevronLeft size={28} />
      </button>

      <img
        src={images[current]}
        alt="Gallery"
        style={{
          width: "600px",
          height: "400px",
          objectFit: "cover",
          border: "5px solid blue",
          display: "block",
          margin: "auto"
        }}
      />

      <button
        className="gallery-arrow right-arrow"
        onClick={nextImage}
      >
        <FiChevronRight size={28} />
      </button>

      <div className="gallery-counter">
        {current + 1} / {images.length}
      </div>

    </section>
  );
}