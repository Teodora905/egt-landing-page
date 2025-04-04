import React, { useState } from "react";
import logo from '../images/white-logo.svg';
import darkIcon from '../images/app-dark-mode.svg';
import lightIcon from '../images/app-light-mode.svg';
import { FaChevronDown } from 'react-icons/fa';
import useIsMobile from '../hooks/useIsMobile';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ darkMode, setDarkMode }) {

  const [showDropdown, setShowDropdown] = useState(false);
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const toggleSubMenu = (key) => {
    setOpenSubMenu((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <nav className="navbar">
      <div className="navication-container">
        <div className="logo">
          <img src={logo} alt="App Logo" width="100" height="38" />
        </div>

        {isMobile ? (
          <>
            <div 
              className={`burger-button-container ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="burger-button-inner"></div>
            </div>

            {mobileMenuOpen && (
              <div className="mobile-menu">
                <ul className="mobile-nav">
                  <li onClick={() => toggleSubMenu('rline')}>
                    <div className="nav-item">
                      <span className={openSubMenu === 'rline' ? 'active' : ''}>R-LINE</span>
                      <FaChevronDown className={openSubMenu === 'rline' ? 'rotated' : ''} />
                    </div>
                    {openSubMenu === 'rline' && (
                      <ul className="sub-menu">
                        <li><a href="#">Premier R4</a></li>
                        <li><a href="#">Premier R6</a></li>
                        <li><a href="#">Premier R8</a></li>
                      </ul>
                    )}
                  </li>

                  {/* Други секции */}
                  <li>
                    <div className="nav-item">
                      <span className={openSubMenu === 'sline' ? 'active' : ''}>S-LINE</span>
                      <FaChevronDown className={openSubMenu === 'sline' ? 'rotated' : ''} />
                    </div>
                  </li>
                  <li>
                    <div className="nav-item">
                      <span className={openSubMenu === 'tline' ? 'active' : ''}>T-LINE</span>
                      <FaChevronDown className={openSubMenu === 'tline' ? 'rotated' : ''} />
                    </div>
                    </li>
                  <li>
                    <div className="nav-item">
                      <span className={openSubMenu === 'sgb' ? 'active' : ''}>SBG</span>
                      <FaChevronDown className={openSubMenu === 'sgb' ? 'rotated' : ''} />
                    </div>
                  </li>
                  <li className="link-items"><a href="#">News & Events</a></li>
                  <li className="link-items"><a href="#">About Us</a></li>
                  <li className="link-items"><a href="#">Contact Us</a></li>

                  {/* Език */}
                  <li className="link-items theme-lang">
                    <div className="lang-item">
                      <img src="https://flagcdn.com/w40/gb.png" alt="EN" width="50" height="30" />
                      <a href="#">EN <FaChevronDown /></a>
                    </div>
                    <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                      <img
                        src={darkMode ? lightIcon : darkIcon}
                        alt="Theme switch"
                        width="34"
                        height="34"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div className="nav-links">
            <ul className="left-links">
              <li
                className={`dropdown ${showDropdown ? 'open' : ''}`}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <a href="#">R-LINE</a>
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li><a href="#">Premier R4</a></li>
                    <li><a href="#">Premier R6</a></li>
                    <li><a href="#">Premier R8</a></li>
                  </ul>
                )}
              </li>
              <li><a href="#">S-LINE</a></li>
              <li><a href="#">T-LINE</a></li>
              <li><a href="#">SBG</a></li>
            </ul>
            <ul className="right-links">
              <li><a href="#">News & Events</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li className="lang-item">
                <img className="lang-image" alt='Language icon' src='https://flagcdn.com/w40/gb.png' width='30'/>
                <a href="#">EN <FaChevronDown /></a>
              </li>
              <div
                className={`theme-button ${darkMode ? '' : 'dark'}`}
                onClick={() => setDarkMode(!darkMode)}
              >
                <img alt='Mode icon' src={darkMode ? lightIcon : darkIcon} height='40' width='40'/>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;