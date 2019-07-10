import React from "react";
import "../../App.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/profile" activeClassName="bro" className="link">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName="bro" className="link">
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="#" className="link">
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to ="#" className="link">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
