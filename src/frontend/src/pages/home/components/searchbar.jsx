import React from "react";

export default ({ setSearch }) => (
  <>
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <div className="columns has-text-centered">
            <div className="column">
              <h1 className="title is-1">Chilean Birds</h1>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-large searchbar"
                    type="search"
                    onChange={setSearch}
                    placeholder="Bird"
                    autoFocus
                  />
                  <span className="icon is-medium is-left">
                    <i className="fa fa-search"></i>
                  </span>
                  <span className="icon is-medium is-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="box cta">
      <div className="columns is-mobile is-centered">
        <div className="field is-grouped is-grouped-multiline"></div>
      </div>
    </div>
  </>
);
