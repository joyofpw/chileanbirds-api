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
              <h3 className="title is-3">{bird.name.latin}</h3>
              <h4 className="title is-4">
                {bird.name.spanish} | {bird.name.english}
              </h4>

              <p>{bird.didyouknow}</p>
              <p>{bird.habitat}</p>

              <p>{bird.iucn.title}</p>
              <p>{bird.iucn.description}</p>

              <p>{bird.order}</p>
              <p>{bird.size}</p>
              <p>{bird.species}</p>

              <figure className="image is-4by3">
                <img
                  src={bird.map.image}
                  alt={bird.map.title}
                  title={bird.map.title}
                />
              </figure>

              <p>{bird.map.title}</p>
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
