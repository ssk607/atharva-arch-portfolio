"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

export default function HomeHeader() {

  const closeTimer = useRef(null);

  const openMegaMenu = () => {
    clearTimeout(closeTimer.current);
    setOpenMenu(true);
  };

  const closeMegaMenu = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(false);
    }, 250);
  };

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
      {
        title: "Commercial",
        href: "/expertise/architectural-design/commercial",
      },
      {
        title: "Healthcare",
        href: "/expertise/architectural-design/healthcare",
      },
      {
        title: "Hospitality",
        href: "/expertise/architectural-design/hospitality",
      },
      {
        title: "Infrastructure",
        href: "/expertise/architectural-design/infrastructure",
      },
      {
        title: "Mixed Use",
        href: "/expertise/architectural-design/mixed-use",
      },
      {
        title: "Private Residences",
        href: "/expertise/architectural-design/private-residences",
      },
      {
        title: "Residential",
        href: "/expertise/architectural-design/residential",
      },
    ],

    "Interior Design": [
      {
        title: "Private Residences",
        href: "/expertise/interior-design/private-residences",
      },
      {
        title: "Residential",
        href: "/expertise/interior-design/residential",
      },
    ],
  };

  return (
    <header
      className={`home-header ${scrolled ? "header-scrolled" : ""
        }`}
    >
      <Link href="/" className="logo">
        ATHARVA KULKARNI ARCHITECTS
      </Link>

      <nav className="main-nav">
        <Link href="/">
          Home
        </Link>

        <Link href="/identity">
          Identity
        </Link>

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

                {Object.keys(menu).map((item) => (
                  <div
                    key={item}
                    className={`mega-item ${activeMenu === item ? "active" : ""
                      }`}
                    onMouseEnter={() => {
                      setActiveMenu(item);
                      openMegaMenu();
                    }}
                  >
                    {item}
                  </div>
                ))}

              </div>

              <div className="mega-right">

                {menu[activeMenu].map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                  >
                    {subItem.title}
                  </Link>
                ))}

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