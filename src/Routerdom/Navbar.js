import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div>
        <ul className="container">
          <li className="link">
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li className="link"> <NavLink to="/about" className="link">About</NavLink></li>
          <li className="link"> <NavLink to="/contact" className="link">Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar