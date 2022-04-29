import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList12,
  faSearch,
  faHomeUser,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";


const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHomeUser} color="blue" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                <FontAwesomeIcon icon={faHeartBroken} color="blue" />
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/List">
                <FontAwesomeIcon icon={faList12} color="blue" />
                RestroList
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <FontAwesomeIcon icon={faSearch} color="blue" />
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update/:id"></Link>
            </li>
          </ul>
        </div>
      </nav>
     <Marquee gradientColor={[66, 135, 245]} speed={[70]}>
      Welcome To A Website, Here you can find World's best Restaurant...
     </Marquee>
    </>
  );
};

export default Home;
