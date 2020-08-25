import React, { useState, useEffect } from "react";
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
      const text = [
        bird.name.spanish.toLowerCase(),
        bird.name.english.toLowerCase(),
        bird.name.latin.toLowerCase(),
        bird.uid.split("-"),
      ].join(" ");

      return text.search(query) > 0;
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

  return <View birds={cachedBirds} setSearch={updateSearch} />;
};
