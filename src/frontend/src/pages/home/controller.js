import React, { useState, useEffect } from 'react';
import View, { BirdModal } from './view';
import Model from './model';

export default () => {
  const [birds, setBirds] = useState(Model.all.default);
  const [cachedBirds, setCachedBirds] = useState(Model.all.default);

  const [openModal, setOpenModal] = useState(null);
  const [birdModal, setBirdModal] = useState(null);

  const updateSearch = ({ target: { value } }) => {
    const query = value.trim().toLowerCase();

    if (query === '') {
      setCachedBirds(birds);
      return;
    }

    const filtered = birds.items.filter((bird) => {
      const text = [
        ' ', // Add initial space to allow better search experience
        bird.name.spanish.toLowerCase(),
        bird.name.english.toLowerCase().split('-').join(' '),
        bird.name.latin.toLowerCase(),
        bird.uid.split('-').join(' ')
      ].join(' ');

      return text.indexOf(query) > 0 || text.search(query) > 0;
    });

    const result = { items: filtered, total: filtered.length };

    setCachedBirds(result);
  };

  useEffect(() => {
    if (!openModal) {
      setBirdModal(null);
      return;
    }

    Model.get.query({ id: openModal }).then((result) => {
      setBirdModal(
        <BirdModal bird={result.item} setOpenModal={setOpenModal} />
      );
    });
  }, [openModal]);

  useEffect(() => {
    Model.all.query().then((results) => {
      setBirds(results);
      setCachedBirds(results);
    });
  }, []);

  return (
    <View
      birds={cachedBirds}
      setSearch={updateSearch}
      openModal={openModal}
      setOpenModal={setOpenModal}
      birdModal={birdModal}
    />
  );
};
