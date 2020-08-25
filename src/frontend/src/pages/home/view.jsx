import React from "react";
import NavBar from "./components/navbar";
import SearchBar from "./components/searchbar";
import Birds from "./components/birds";
import BirdModal from "./components/birdmodal";
import Spinner from "../../shared/components/spinner";

const View = ({ birds, setSearch, openModal, setOpenModal, birdModal }) => {
  return (
    <>
      <NavBar />
      <SearchBar setSearch={setSearch} />
      <Spinner />

      <Birds
        birds={birds}
        openModal={openModal}
        setOpenModal={setOpenModal}
        birdModal={birdModal}
      />
    </>
  );
};

export { NavBar, SearchBar, Birds, BirdModal, View };
export default View;
