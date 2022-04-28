import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/List">RestroList</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Details">Details</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/update">Update</Link>
          </li>
          <li className='nav-item'><Link className="nav-link" to='/create'>Create</Link></li>
        </ul>
        </div>
      </nav>
     
    </>
  );
};

export default Home;
