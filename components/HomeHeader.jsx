"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

export default function HomeHeader() {
  const [scrolled, setScrolled] = useState(false);

  const [openMenu, setOpenMenu] = useState(false);

  const [activeMenu, setActiveMenu] = useState(
    "Architectural Design"
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = {
    "Architectural Design": [
      "Commercial",
      "Healthcare",
      "Hospitality",
      "Infrastructure",
      "Mixed Use",
      "Private Residences",
      "Residential",
    ],

    "Interior Design": [
      "Private Residences",
      "Residential",
    ],
  };

  return (
    <header
      className={`home-header ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <Link href="/" className="logo">
        ATHARVA KULKARNI ARCHITECTS
      </Link>

      <nav className="main-nav">
        <Link href="/">Projects</Link>

        <Link href="/identity">
          Identity
        </Link>

        <div
          className="expertise-wrapper"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          <span className="expertise-link">
            Expertise
            <FiChevronDown />
          </span>

          {openMenu && (
            <div className="mega-menu">

              <div className="mega-left">

                {Object.keys(menu).map((item) => (
                  <div
                    key={item}
                    className={`mega-item ${
                      activeMenu === item
                        ? "active"
                        : ""
                    }`}
                    onMouseEnter={() =>
                      setActiveMenu(item)
                    }
                  >
                    {item}
                  </div>
                ))}

              </div>

              <div className="mega-right">

                {menu[activeMenu].map(
                  (subItem) => (
                    <Link
                      key={subItem}
                      href="#"
                    >
                      {subItem}
                    </Link>
                  )
                )}

              </div>

            </div>
          )}
        </div>

        <Link href="/strength">
          Strength
        </Link>

        <Link href="/connect">
          Connect
        </Link>
      </nav>

      <button className="search-button">
        <FiSearch size={20} />
      </button>
    </header>
  );
}