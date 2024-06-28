import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css"; // Import CSS module

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          {/* Logo/Brand */}
          <Link to="/" className={styles.brand}>
            My Movie App
          </Link>

          {/* Hamburger menu button for mobile */}
          <button className={styles.hamburger} onClick={toggleMenu}>
            <span
              className={`${styles.bar} ${isOpen ? styles.active : ""}`}
            ></span>
            <span
              className={`${styles.bar} ${isOpen ? styles.active : ""}`}
            ></span>
            <span
              className={`${styles.bar} ${isOpen ? styles.active : ""}`}
            ></span>
          </button>

          {/* Navbar items */}
          <ul className={`${styles.navbarItems} ${isOpen ? styles.open : ""}`}>
            <li>
              <Link to="/" className={styles.navbarLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/add" className={styles.navbarLink}>
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/edit" className={styles.navbarLink}>
                Edit Movie
              </Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>

          {/* Search box */}
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search movies..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
