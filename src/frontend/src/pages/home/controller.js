import React, { useState, useEffect, useRef } from "react";
import View from "./view";
import Model from "./model";

export default () => {
  const [birds, setBirds] = useState(Model.all.default);

  const [cachedBirds, setCachedBirds] = useState(Model.all.default);

  const updateSearch = ({ target: { value } }) => {
    const query = value.trim().toLowerCase();

    if (query === "") {
      setCachedBirds(birds);
      return;
    }

    const filtered = birds.items.filter((bird) => {
      const names = `${bird.name.spanish} ${bird.name.english} ${bird.uid}`.toLowerCase();
      return names.search(query) > 0;
    });

    const result = { items: filtered, total: filtered.length };

    setCachedBirds(result);
  };

  useEffect(() => {
    Model.all.query().then((results) => {
      setBirds(results);
      setCachedBirds(results);
    });
  }, []);

  useEffect(() => {
    console.log({ cachedBirds });
  }, [cachedBirds]);

  return <View birds={cachedBirds} setSearch={updateSearch} />;
};
