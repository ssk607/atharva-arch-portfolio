"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import expertise from "@/app/data/expertise";

export default function HomeHeader({ internal = false }) {
  const closeTimer = useRef(null);

  const [scrolled, setScrolled] = useState(false);

  // active dropdown: "expertise" | "connect" | null
  const [activeDropdown, setActiveDropdown] = useState(null);

  // active discipline shown in Expertise menu
  const menu = useMemo(() => {
    const grouped = {};

    expertise.forEach((discipline) => {
      grouped[discipline.title] = discipline.categories.map((category) => ({
        title: category.title,
        slug: category.slug,
        href: `/expertise/${discipline.slug}/${category.slug}`,
      }));
    });

    return grouped;
  }, []);

  const disciplines = Object.keys(menu);

  const [activeMenu, setActiveMenu] = useState(
    disciplines.length ? disciplines[0] : ""
  );

  const openDropdown = (type) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(type);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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

        {/* =========================
      EXPERTISE
  ========================= */}

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => openDropdown("expertise")}
          onMouseLeave={closeDropdown}
        >
          <span className="expertise-link">
            Expertise
            <FiChevronDown />
          </span>

          {activeDropdown === "expertise" && (
            <div className="mega-menu">

              <div className="mega-left">
                {disciplines.map((discipline) => (
                  <div
                    key={discipline}
                    className={`mega-item ${activeMenu === discipline ? "active" : ""
                      }`}
                    onMouseEnter={() => setActiveMenu(discipline)}
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

        {/* =========================
      CONNECT
  ========================= */}

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => openDropdown("connect")}
          onMouseLeave={closeDropdown}
        >
          <span className="expertise-link">
            Connect
            <FiChevronDown />
          </span>

          {activeDropdown === "connect" && (

            <div className="mega-menu connect-mega">

              <div className="connect-image">

                <img
                  src="/images/connect-menu.jpg"
                  alt="Atharva Architects"
                />

              </div>

              <div className="connect-content">

                <p className="mega-title">
                  CONNECT
                </p>

                <h3>
                  Let's Build
                  <br />
                  Something Beautiful
                </h3>

                <p className="connect-description">

                  We collaborate with homeowners,
                  developers and organizations to create
                  thoughtful architecture and interiors.
                  We are also always looking for passionate
                  architects to join our growing team.

                </p>

                <a
                  href="mailto:hello@atharvaarchitects.com"
                  className="connect-email"
                >
                  hello@atharvaarchitects.com
                </a>

                <div className="connect-links">

                  <Link href="/contact">
                    Contact Us
                  </Link>

                  <Link href="/careers">
                    Careers
                  </Link>

                </div>

              </div>

            </div>

          )}
        </div>
      </nav>

      <button className="search-button">
        <FiSearch size={20} />
      </button>
    </header>
  );
}