import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import MainHeader from './MainHeader';
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UiElements/Backdrop';

const MainNavigation = (props) => {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setdrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setdrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className='main-navigation__drawer'>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>YourPlaces</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
