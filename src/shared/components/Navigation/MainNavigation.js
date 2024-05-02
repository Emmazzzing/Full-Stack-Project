import React, { useState } from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MainNavigation = (props) => {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);
  const OpenDrawerHandler = () => {
    setdrawerIsOpen(true);
  };

  const CloseDrawerHandler = () => {
    setdrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={CloseDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={CloseDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={OpenDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlace</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
