import React, { useState, useEffect } from "react";
import View from "./view";
import Model from "./model";

export default () => {
  const [birds, setBirds] = useState(Model.all.default);

  useEffect(() => {
    Model.all.query().then((results) => {
      setBirds(results);
    });
  }, []);

  return <View birds={birds} />;
};
