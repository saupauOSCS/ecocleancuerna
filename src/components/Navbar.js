import { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navigation">
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink to="/" onClick={closeMobileMenu} end>
                ¿QUIÉNES SOMOS?
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={closeMobileMenu}>
                SERVICIOS
              </NavLink>
            </li>
            <li>
              <NavLink to="/recomendations" onClick={closeMobileMenu}>
                RECOMENDACIONES
              </NavLink>
            </li>
            <li>
              <NavLink to="/promotions" onClick={closeMobileMenu}>
                PROMOCIONES
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>
                CONTACTO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
