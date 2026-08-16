"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FiChevronDown,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";

import expertise from "@/app/data/expertise";

export default function HomeHeader({ internal = false }) {
  /* =====================================================
     DESKTOP HEADER
  ===================================================== */

  const [scrolled, setScrolled] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  /* =====================================================
     MOBILE MENU
  ===================================================== */

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mobileExpertiseOpen, setMobileExpertiseOpen] =
    useState(false);

  const [mobileDiscipline, setMobileDiscipline] =
    useState(null);

  const [mobileConnectOpen, setMobileConnectOpen] =
    useState(false);

  /* =====================================================
     BUILD EXPERTISE MENU
  ===================================================== */

  const menu = useMemo(() => {
    const grouped = {};

    expertise.forEach((discipline) => {
      grouped[discipline.title] = discipline.categories.map(
        (category) => ({
          title: category.title,
          slug: category.slug,
          href: `/expertise/${discipline.slug}/${category.slug}`,
        })
      );
    });

    return grouped;
  }, []);

  const disciplines = Object.keys(menu);

  /* =====================================================
     DESKTOP ACTIVE DISCIPLINE
  ===================================================== */

  const [activeMenu, setActiveMenu] = useState(
    disciplines.length ? disciplines[0] : ""
  );

  /* =====================================================
     SCROLL HEADER
  ===================================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =====================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =====================================================
     CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP
  ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setMobileMenuOpen(false);
        setMobileExpertiseOpen(false);
        setMobileDiscipline(null);
        setMobileConnectOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =====================================================
     DESKTOP DROPDOWNS
  ===================================================== */

  const openDropdown = (type) => {
    setActiveDropdown(type);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  /* =====================================================
     MOBILE MENU OPEN / CLOSE
  ===================================================== */

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);

    setMobileExpertiseOpen(false);
    setMobileDiscipline(null);
    setMobileConnectOpen(false);
  };

  /* =====================================================
     MOBILE EXPERTISE
  ===================================================== */

  const toggleMobileExpertise = () => {
    setMobileExpertiseOpen((previous) => !previous);

    setMobileConnectOpen(false);

    if (mobileExpertiseOpen) {
      setMobileDiscipline(null);
    }
  };

  /* =====================================================
     MOBILE DISCIPLINE
  ===================================================== */

  const toggleMobileDiscipline = (discipline) => {
    setMobileDiscipline((previous) =>
      previous === discipline ? null : discipline
    );
  };

  /* =====================================================
     MOBILE CONNECT
  ===================================================== */

  const toggleMobileConnect = () => {
    setMobileConnectOpen((previous) => !previous);

    setMobileExpertiseOpen(false);
    setMobileDiscipline(null);
  };

  /* =====================================================
     MOBILE LINK CLICK
  ===================================================== */

  const handleMobileLinkClick = () => {
    closeMobileMenu();
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      <header
        className={`home-header ${scrolled || internal ? "header-scrolled" : ""
          } ${mobileMenuOpen ? "mobile-header-open" : ""
          }`}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href="/"
          className="logo"
          onClick={handleMobileLinkClick}
        >
          AKA
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="main-nav">
          <Link href="/">Home</Link>

          <Link href="/identity">Identity</Link>

          {/* ===============================
              EXPERTISE
          =============================== */}

          <div
            className="dropdown-wrapper"
            onMouseEnter={() => openDropdown("expertise")}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              className="expertise-link"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "expertise"
                    ? null
                    : "expertise"
                )
              }
            >
              Expertise
              <FiChevronDown />
            </button>

            {activeDropdown === "expertise" && (
              <div className="mega-menu">
                <div className="mega-left">
                  {disciplines.map((discipline) => (
                    <button
                      type="button"
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
                    </button>
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

          {/* ===============================
              CONNECT
          =============================== */}

          <div
            className="dropdown-wrapper"
            onMouseEnter={() => openDropdown("connect")}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              className="expertise-link"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "connect"
                    ? null
                    : "connect"
                )
              }
            >
              Connect
              <FiChevronDown />
            </button>

            {activeDropdown === "connect" && (
              <div className="connect-menu">
                <Link href="/contact">
                  Contact Us
                </Link>

                <Link href="/careers">
                  Careers
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* =================================================
            DESKTOP SEARCH
        ================================================= */}

        <button
          type="button"
          className="search-button"
          aria-label="Search"
        >
          <FiSearch size={20} />
        </button>

        {/* =================================================
            MOBILE HAMBURGER
        ================================================= */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={openMobileMenu}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <FiMenu size={26} />
        </button>
      </header>

      {/* ===================================================
          MOBILE NAVIGATION
      =================================================== */}

      <div
        className={`mobile-navigation ${mobileMenuOpen
            ? "mobile-navigation-open"
            : ""
          }`}
      >
        {/* =================================================
            MOBILE CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-close-button"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          <FiX size={32} />
        </button>

        <div className="mobile-navigation-inner">

          {/* ===============================
              HOME
          =============================== */}

          <Link
            href="/"
            onClick={handleMobileLinkClick}
          >
            Home
          </Link>

          {/* ===============================
              IDENTITY
          =============================== */}

          <Link
            href="/identity"
            onClick={handleMobileLinkClick}
          >
            Identity
          </Link>

          {/* ===============================
              EXPERTISE
          =============================== */}

          <div className="mobile-menu-section">
            <button
              type="button"
              className="mobile-menu-parent"
              onClick={toggleMobileExpertise}
            >
              <span>Expertise</span>

              <FiChevronDown
                className={
                  mobileExpertiseOpen
                    ? "mobile-parent-open"
                    : ""
                }
              />
            </button>

            {mobileExpertiseOpen && (
              <div className="mobile-submenu">

                {disciplines.map((discipline) => (
                  <div
                    className="mobile-discipline"
                    key={discipline}
                  >

                    {/* =========================
                        DISCIPLINE BUTTON
                    ========================= */}

                    <button
                      type="button"
                      className="mobile-discipline-button"
                      onClick={() =>
                        toggleMobileDiscipline(
                          discipline
                        )
                      }
                    >
                      <span>{discipline}</span>

                      <FiChevronDown
                        className={
                          mobileDiscipline === discipline
                            ? "mobile-discipline-open"
                            : ""
                        }
                      />
                    </button>

                    {/* =========================
                        CATEGORY LIST
                    ========================= */}

                    {mobileDiscipline === discipline && (
                      <div className="mobile-category-list">

                        {(menu[discipline] || []).map(
                          (item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={
                                handleMobileLinkClick
                              }
                            >
                              {item.title}
                            </Link>
                          )
                        )}

                      </div>
                    )}

                  </div>
                ))}

              </div>
            )}
          </div>

          {/* ===============================
              STRENGTH
          =============================== */}

          <Link
            href="/strength"
            onClick={handleMobileLinkClick}
          >
            Strength
          </Link>

          {/* ===============================
              CONNECT
          =============================== */}

          <div className="mobile-menu-section">

            <button
              type="button"
              className="mobile-menu-parent"
              onClick={toggleMobileConnect}
            >
              <span>Connect</span>

              <FiChevronDown
                className={
                  mobileConnectOpen
                    ? "mobile-parent-open"
                    : ""
                }
              />
            </button>

            {mobileConnectOpen && (
              <div className="connect-mobile-submenu">

                <Link
                  href="/contact"
                  onClick={handleMobileLinkClick}
                >
                  Contact Us
                </Link>

                <Link
                  href="/careers"
                  onClick={handleMobileLinkClick}
                >
                  Careers
                </Link>

              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}