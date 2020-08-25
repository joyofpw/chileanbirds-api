import React from "react";
import Spinner from "react-spinkit";
import { usePromiseTracker } from "react-promise-tracker";

export default () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress ? (
    <div className="has-text-centered" style={{ padding: "5%" }}>
      <Spinner name="ball-pulse-sync" />
    </div>
  ) : null;
};
