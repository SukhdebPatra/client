import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList12,
  faSearch,
  faHomeUser,
  faHeartBroken,
  
  faSign,
  faSignOut
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHomeUser} color="limegreen" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/create">
                <FontAwesomeIcon icon={faHeartBroken} color="red" />
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/List">
                <FontAwesomeIcon icon={faList12} color="#f2118d" />
                RestroList
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <FontAwesomeIcon icon={faSearch} color="#087afc" />
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update/:id"></Link>
            </li>
            {localStorage.getItem("login") ? 
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  <FontAwesomeIcon icon={faSignOut} color="#f5dd07" />
                  LogOut
                </Link>
              </li>
             : 
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faSign} color="blue" />
                LogIN
              </Link>
            }
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
