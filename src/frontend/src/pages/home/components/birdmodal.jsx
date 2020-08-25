import React from "react";

export default ({ bird, setOpenModal }) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={() => setOpenModal(null)}></div>
    <div className="modal-content">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img
                src={bird.images.main}
                alt={bird.name.english}
                title={bird.name.spanish}
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <h2 className="title is-2">{bird.name.latin}</h2>
              <p>{bird.didyouknow}</p>
              <p>{bird.habitat}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={() => setOpenModal(null)}
    ></button>
  </div>
);
