import React, { useState, useEffect } from "react";
import View from "./view";
import Model from "./model";

export default () => {
  const [birds, setBirds] = useState(Model.all.default);

  useEffect(async () => {
    const results = await Model.all.query();
    setBirds(results);
  }, []);

  useEffect(() => {
    console.log(birds);
  }, [birds]);

  return <View />;
};
