import React from "react";

export default ({ bird, setOpenModal }) => (
  <div key={bird.uid} className="modal is-active">
    <div className="modal-background" onClick={() => setOpenModal(null)}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{bird.name.latin}</p>
        <button
          className="delete"
          aria-label="close"
          onClick={() => setOpenModal(null)}
        ></button>
      </header>
      <section className="modal-card-body">
        <figure className="image is-4by3">
          <img
            src={bird.images.main}
            alt={bird.name.english}
            title={bird.name.spanish}
          />
        </figure>
      </section>
      <footer className="modal-card-foot">
        <button
          className="button is-success is-large"
          onClick={() => setOpenModal(null)}
        >
          OK
        </button>
      </footer>
    </div>
  </div>
);
