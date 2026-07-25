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

        <span className="hero-location">
          {project.location}
        </span>

        <h1 className="hero-title">
          {project.title}
        </h1>

        <div className="hero-info">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.status}</span>
        </div>

        <button className="hero-button">
          View Project
        </button>

      </div>

    </Link>
  );
}