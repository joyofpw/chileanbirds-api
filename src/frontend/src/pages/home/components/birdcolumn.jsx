import React from 'react';
import { Spinner } from '../../../shared/components';

export default (item, index, { openModal, setOpenModal, birdModal }) => {
  return (
    <React.Fragment key={index}>
      <div
        className="column is-3"
        onClick={() => setOpenModal(item.uid)}
        style={{ cursor: 'pointer' }}
      >
        <div className="card is-shady">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={item.images.main}
                alt={item.name.latin}
                title={item.name.spanish}
                className="modal-button"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h3 className="title is-3">{item.name.latin}</h3>
              <p>
                {item.name.spanish} / {item.name.english}
              </p>
              {openModal === item.uid ? <Spinner /> : null}
            </div>
          </div>
        </div>
      </div>

      {openModal === item.uid ? birdModal : null}
    </React.Fragment>
  );
};
