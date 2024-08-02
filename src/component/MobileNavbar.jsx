import React from "react";
import { Link } from "react-router-dom";

function MobileNavbar() {
    return (
        <>
        <header>
          <nav id="navMob" role="navigation">
          
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about" >About</Link></li>
              <li><Link to="/service" >Services</Link></li>
              <li><Link to="/project" >Project</Link></li>
            </ul>
           </div>
          </nav>
     
          </header>
        </>
    );
}

export default MobileNavbar;
