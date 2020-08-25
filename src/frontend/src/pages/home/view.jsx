import React from 'react';
import { NavBar, SearchBar, Footer } from '../../shared/components';

import Birds from './components/birds';
import BirdModal from './components/birdmodal';

const View = ({ birds, setSearch, openModal, setOpenModal, birdModal }) => {
  return (
    <>
      <NavBar />
      <SearchBar setSearch={setSearch} />
      <Birds
        birds={birds}
        openModal={openModal}
        setOpenModal={setOpenModal}
        birdModal={birdModal}
      />
      <Footer />
    </>
  );
};

export { Birds, BirdModal, View };
export default View;
