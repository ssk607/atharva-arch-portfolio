"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiSearch, FiMenu, FiX } from "react-icons/fi";
import expertise from "@/app/data/expertise";

export default function HomeHeader({ internal = false }) {
  const closeTimer = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false);
  const [mobileDiscipline, setMobileDiscipline] = useState(null);

  // Create expertise menu structure
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

  // ----------------------------------------
  // Desktop dropdown controls
  // ----------------------------------------

  const openDropdown = (type) => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(type);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  // ----------------------------------------
  // Scroll
  // ----------------------------------------

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // ----------------------------------------
  // Close mobile menu when screen becomes desktop
  // ----------------------------------------

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setMobileMenuOpen(false);
        setMobileExpertiseOpen(false);
        setMobileConnectOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ----------------------------------------
  // Prevent body scroll when mobile menu open
  // ----------------------------------------

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

  // ----------------------------------------
  // Mobile menu helpers
  // ----------------------------------------

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpertiseOpen(false);
    setMobileConnectOpen(false);
    setMobileDiscipline(null);
  };

  const toggleMobileExpertise = () => {
    setMobileExpertiseOpen((prev) => !prev);
    setMobileConnectOpen(false);
  };

  const toggleMobileConnect = () => {
    setMobileConnectOpen((prev) => !prev);
    setMobileExpertiseOpen(false);
  };

  return (
    <>
      <header
        className={`home-header ${
          scrolled || internal ? "header-scrolled" : ""
        }`}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="logo"
          onClick={closeMobileMenu}
        >
          AKA
        </Link>

        {/* ==========================================
            DESKTOP NAVIGATION
        ========================================== */}

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
              <FiChevronDown
                className={
                  activeDropdown === "expertise"
                    ? "dropdown-arrow-open"
                    : ""
                }
              />
            </button>

            {activeDropdown === "expertise" && (
              <div className="mega-menu">

                <div className="mega-left">

                  {disciplines.map((discipline) => (
                    <div
                      key={discipline}
                      className={`mega-item ${
                        activeMenu === discipline
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

          {/* =========================
              STRENGTH
          ========================= */}

          <Link href="/strength">
            Strength
          </Link>

          {/* =========================
              CONNECT
          ========================= */}

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
              <FiChevronDown
                className={
                  activeDropdown === "connect"
                    ? "dropdown-arrow-open"
                    : ""
                }
              />
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

        {/* SEARCH */}

        <button
          type="button"
          className="search-button"
          aria-label="Search"
        >
          <FiSearch size={20} />
        </button>

        {/* ==========================================
            MOBILE MENU BUTTON
        ========================================== */}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenuOpen((prev) => !prev)
          }
          aria-label={
            mobileMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <FiX size={25} />
          ) : (
            <FiMenu size={25} />
          )}
        </button>
      </header>

      {/* ==========================================
          MOBILE NAVIGATION
      ========================================== */}

      <div
        className={`mobile-navigation ${
          mobileMenuOpen ? "mobile-navigation-open" : ""
        }`}
      >

        <div className="mobile-navigation-inner">

          {/* HOME */}

          <Link
            href="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* IDENTITY */}

          <Link
            href="/identity"
            onClick={closeMobileMenu}
          >
            Identity
          </Link>

          {/* ========================================
              EXPERTISE
          ======================================== */}

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
                    ? "mobile-arrow-open"
                    : ""
                }
              />
            </button>

            {mobileExpertiseOpen && (
              <div className="mobile-submenu">

                {disciplines.map((discipline) => {
                  const isOpen =
                    mobileDiscipline === discipline;

                  return (
                    <div
                      key={discipline}
                      className="mobile-discipline"
                    >

                      <button
                        type="button"
                        className="mobile-discipline-button"
                        onClick={() =>
                          setMobileDiscipline(
                            isOpen
                              ? null
                              : discipline
                          )
                        }
                      >
                        <span>{discipline}</span>

                        <FiChevronDown
                          className={
                            isOpen
                              ? "mobile-arrow-open"
                              : ""
                          }
                        />
                      </button>

                      {isOpen && (
                        <div className="mobile-category-list">

                          {(menu[discipline] || []).map(
                            (item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={
                                  closeMobileMenu
                                }
                              >
                                {item.title}
                              </Link>
                            )
                          )}

                        </div>
                      )}

                    </div>
                  );
                })}

              </div>
            )}

          </div>

          {/* STRENGTH */}

          <Link
            href="/strength"
            onClick={closeMobileMenu}
          >
            Strength
          </Link>

          {/* ========================================
              CONNECT
          ======================================== */}

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
                    ? "mobile-arrow-open"
                    : ""
                }
              />
            </button>

            {mobileConnectOpen && (
              <div className="mobile-submenu connect-mobile-submenu">

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>

                <Link
                  href="/careers"
                  onClick={closeMobileMenu}
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