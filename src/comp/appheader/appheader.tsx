import React from "react";
function App(){
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/fraction" className="nav-link">Fractions</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/derivative" className="nav-link">Derivatives</a>
          </li>
        </ul>
    
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="/" role="button">
              <i className="fas fa-search"></i>
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default App;