import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Spa Saloon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler-icon">
            <i className="bi bi-list"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex ml-auto" role="search">
            <div className="search-container" style={{ paddingLeft: '10px' }}>
              <form>
                <input type="search" placeholder="Search..." className="search-input"></input>
                <button type="submit">Search</button>
              </form>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle custom-dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-list"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
