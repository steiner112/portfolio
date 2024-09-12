import React, { useRef } from "react";
import { Link } from "react-router-dom";

function MobileNavbar() {
  const checkboxRef = useRef(null);

  // Function to close the navbar by unchecking the checkbox
  const handleNavLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <>
      <header>
        <nav id="navMob" role="navigation">
          <div id="menuToggle">
            {/* Use ref to reference the checkbox */}
            <input type="checkbox" ref={checkboxRef} />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li><Link to="/" onClick={handleNavLinkClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleNavLinkClick}>About</Link></li>
              <li><Link to="/service" onClick={handleNavLinkClick}>Services</Link></li>
              <li><Link to="/project" onClick={handleNavLinkClick}>Project</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MobileNavbar;
