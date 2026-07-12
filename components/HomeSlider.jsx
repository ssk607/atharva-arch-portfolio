"use client";

import { useRef } from "react";
import HomeSlide from "./HomeSlide";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HomeSlider({ projects }) {
  const trackRef = useRef(null);

  const scrollSlides = (direction) => {
    if (!trackRef.current) return;

    const slide = trackRef.current.firstElementChild;
    if (!slide) return;

    trackRef.current.scrollBy({
      left: direction * slide.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-slider-wrapper">
      <button
        className="gallery-arrow left-arrow"
        onClick={() => scrollSlides(-1)}
      >
        <FiChevronLeft size={28} />
      </button>

      <div className="home-slider-track" ref={trackRef}>
        {projects.map((project) => (
          <HomeSlide
            key={project.id}
            project={project}
          />
        ))}
      </div>

      <button
        className="gallery-arrow right-arrow"
        onClick={() => scrollSlides(1)}
      >
        <FiChevronRight size={28} />
      </button>
    </div>
  );
}