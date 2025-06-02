import React from 'react';
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';
import { Outlet } from 'react-router-dom';

function Userlayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Userlayout;
