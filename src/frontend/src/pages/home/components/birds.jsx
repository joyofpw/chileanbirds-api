import React from "react";
import InfiniteScroller from "react-infinite-scroller";

const makeRow = (cols, index) => (
  <div key={index} className="columns features">
    {cols}
  </div>
);

const makeColumn = (item, index) => (
  <div key={index} className="column is-3">
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={item.images.main}
            alt={item.name.latin}
            title={item.name.spanish}
            className="modal-button"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h3 className="title is-3">{item.name.latin}</h3>
          <p>
            {item.name.spanish} / {item.name.english}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const noResults = () => (
  <section className="container">
    <div className="columns">
      <div className="column is-12">
        <div className="content has-text-centered">
          <span className="icon is-large">
            <h1
              className="is-title"
              style={{ fontSize: "5em", paddingTop: "3em" }}
            >
              <i className="fa fa-exclamation-triangle"></i>
            </h1>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default ({ birds }) => {
  if (!birds || birds.total === 0) {
    return noResults();
  }

  const columnsPerRow = 4;
  const hasReachedMaxColumns = (index) =>
    index > 0 && index % columnsPerRow === 0;

  const columns = {};
  const rows = [];
  let rowCounter = 0;

  birds.items.forEach((item, index) => {
    if (hasReachedMaxColumns(index)) {
      rowCounter++;
    }

    if (!columns[rowCounter]) {
      columns[rowCounter] = [];
    }

    columns[rowCounter].push(makeColumn(item, index));
  });

  Object.keys(columns).forEach((key, index) => {
    const cols = columns[key];
    rows.push(makeRow(cols, index));
  });

  return (
    <section className="container">
      <InfiniteScroller
        pageStart={1}
        threshold={birds.total}
        loadMore={() => {}}
      >
        {rows}
      </InfiniteScroller>
    </section>
  );
};
