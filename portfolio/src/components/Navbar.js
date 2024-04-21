// // Developed by Jignesh Sapoliya
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark">

        <Link className="navbar-brand" to="/">
          <span className="logo">Team RockX</span>
        </Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navigation" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/OurProducts">
                <i className="fas fa-project-diagram"></i> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
                <i className="fas fa-user"></i> About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;