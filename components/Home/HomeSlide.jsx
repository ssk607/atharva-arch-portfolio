"use client";

import "./HomeSlider.css";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeSlide({ project, active }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`hero-slide ${active ? "active" : ""}`}
    >
      <img
        src={project.cover}
        alt={project.title}
        className="hero-image"
      />

      <div className="hero-overlay" />

      <div className="hero-content">

        <h1 className="hero-title">
          {project.title}
        </h1>
        
        <span className="hero-location">
          {project.location}
        </span>


      </div>

    </Link>
  );
}