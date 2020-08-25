import React from "react";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchbar";
import Birds from "./components/birds";

const View = ({ birds, setSearch }) => (
  <>
    <NavBar />
    <SearchBar setSearch={setSearch} />
    <Birds birds={birds} />
  </>
);

export { NavBar, SearchBar, Birds, View };
export default View;
