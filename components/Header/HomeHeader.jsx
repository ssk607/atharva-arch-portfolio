"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import projects from "@/app/data/project";

export default function HomeHeader({
  internal = false
}) {
  const closeTimer = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  // Build the menu automatically from project.js
  const menu = useMemo(() => {
    const grouped = {};

    projects.forEach((project) => {
      const discipline = project.discipline.title;

      if (!grouped[discipline]) {
        grouped[discipline] = [];
      }

      const exists = grouped[discipline].find(
        (item) => item.slug === project.category.slug
      );

      if (!exists) {
        grouped[discipline].push({
          title: project.category.title,
          slug: project.category.slug,
          disciplineSlug: project.discipline.slug,
          href: `/expertise/${project.discipline.slug}/${project.category.slug}`,
        });
      }
    });

    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) => a.title.localeCompare(b.title));
    });

    return grouped;
  }, []);

  const disciplines = Object.keys(menu);

  const [activeMenu, setActiveMenu] = useState(
    disciplines.length ? disciplines[0] : ""
  );

  const openMegaMenu = () => {
    clearTimeout(closeTimer.current);
    setOpenMenu(true);
  };

  const closeMegaMenu = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(false);
    }, 250);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`home-header ${scrolled || internal
          ? "header-scrolled"
          : ""
        }`}
    >
      <Link href="/" className="logo">
        ATHARVA KULKARNI ARCHITECTS
      </Link>

      <nav className="main-nav">
        <Link href="/">Home</Link>

        <Link href="/identity">Identity</Link>

        <div
          className="expertise-wrapper"
          onMouseEnter={openMegaMenu}
          onMouseLeave={closeMegaMenu}
        >
          <span className="expertise-link">
            Expertise
            <FiChevronDown />
          </span>

          {openMenu && (
            <div className="mega-menu">
              <div className="mega-left">
                {disciplines.map((discipline) => (
                  <div
                    key={discipline}
                    className={`mega-item ${activeMenu === discipline
                      ? "active"
                      : ""
                      }`}
                    onMouseEnter={() =>
                      setActiveMenu(discipline)
                    }
                  >
                    {discipline}
                  </div>
                ))}
              </div>

              <div className="mega-right">
                {(menu[activeMenu] || []).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link href="/strength">Strength</Link>

        <Link href="/connect">Connect</Link>
      </nav>

      <button className="search-button">
        <FiSearch size={20} />
      </button>
    </header>
  );
}