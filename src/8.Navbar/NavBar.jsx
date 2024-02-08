import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>My Website</h2>
          <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </button>
        </div>
        {toggle && (
          <div className="links-container  show-container">
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
