import React from "react";

export default () => (
  <nav className="navbar nin-color ">
    <div className="container">
      <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu" id="navMenu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-dropdown">
              <a href="https://ninjas.cl" className="navbar-item">
                Ninjas.cl
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
