import React from 'react';
import InfiniteScroller from 'react-infinite-scroller';
import { Spinner } from '../../../shared/components';
import { usePromiseTracker } from 'react-promise-tracker';

import makeColumnItem from './birdcolumn';
import makeRow from './birdrow';
import noResults from './birdnoresults';

export default ({ birds, openModal, setOpenModal, birdModal }) => {
  if (!birds) {
    return noResults();
  }

  const { promiseInProgress } = usePromiseTracker();
  if (birds.total === 0 && promiseInProgress) {
    return <Spinner />;
  }

  if (birds.total === 0) {
    return noResults();
  }

  const columnsPerRow = 4;
  const hasReachedMaxColumnItems = (index) =>
    index > 0 && index % columnsPerRow === 0;

  const columns = {};
  const rows = [];
  let rowCounter = 0;

  birds.items.forEach((item, index) => {
    if (hasReachedMaxColumnItems(index)) {
      rowCounter++;
    }

    if (!columns[rowCounter]) {
      columns[rowCounter] = [];
    }

    columns[rowCounter].push(
      makeColumnItem(item, index, {
        openModal,
        setOpenModal,
        birdModal
      })
    );
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
