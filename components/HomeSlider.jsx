"use client";

import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HomeSlide from "./HomeSlide";

export default function HomeSlider({ projects }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // Auto-play every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">

      {projects.map((project, index) => (
        <HomeSlide
          key={project.id}
          project={project}
          active={index === current}
        />
      ))}

      <button
        className="hero-arrow hero-left"
        onClick={previousSlide}
      >
        <FiChevronLeft size={32} />
      </button>

      <button
        className="hero-arrow hero-right"
        onClick={nextSlide}
      >
        <FiChevronRight size={32} />
      </button>

      <div className="hero-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              current === index ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

    </section>
  );
}