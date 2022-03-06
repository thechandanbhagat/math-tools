import React from "react";

function App() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light elevation-5">
      <div className="container-fluid">
        <button
          className="navbar-toggler order-1"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
          {/* <!-- Left navbar links --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/fraction" className="nav-link">
                Fractions
              </a>
            </li>
            <li className="nav-item">
              <a href="/derivative" className="nav-link">
                Derivatives
              </a>
            </li>
          </ul>
        </div>
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
