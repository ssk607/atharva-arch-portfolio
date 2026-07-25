"use client";

import { useRef, useState } from "react";
import HomeSlide from "./HomeSlide";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HomeSlider({ projects }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    if (!trackRef.current) return;

    const slide = trackRef.current.children[index];
    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const nextSlide = () => {
    const next = (current + 1) % projects.length;
    setCurrent(next);
    goToSlide(next);
  };

  const previousSlide = () => {
    const prev = (current - 1 + projects.length) % projects.length;
    setCurrent(prev);
    goToSlide(prev);
  };

  return (
    <div className="home-slider-wrapper">

      <button
        className="gallery-arrow left-arrow"
        onClick={previousSlide}
      >
        <FiChevronLeft size={28} />
      </button>

      <div
        className="home-slider-track"
        ref={trackRef}
      >
        {projects.map((project) => (
          <HomeSlide
            key={project.id}
            project={project}
          />
        ))}
      </div>

      <button
        className="gallery-arrow right-arrow"
        onClick={nextSlide}
      >
        <FiChevronRight size={28} />
      </button>

    </div>
  );
}