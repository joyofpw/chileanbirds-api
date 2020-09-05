import React from 'react';

export default ({ bird, setOpenModal }) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={() => setOpenModal(null)}></div>
    <div className="modal-content">
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h3 className="title is-3 has-text-centered">
                {bird.name.latin}
              </h3>
              <h4 className="title is-4 has-text-centered">
                {bird.name.spanish} | {bird.name.english}
              </h4>

              <figure className="image is-4by3">
                <img
                  src={bird.images.main}
                  alt={bird.name.english}
                  title={bird.name.spanish}
                />
              </figure>

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
                  width="100%"
                  loading="lazy"
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
