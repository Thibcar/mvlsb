import React from "react";

import { Link } from 'gatsby';

import PropTypes from 'prop-types';


import "../utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainNavigation = ({ menu }) => {

  return (
    <nav className="main-menu nav-menu">
      <ul className="menu menu-list">
        {menu.items.map((item, i) => (
          <li key={i} className="menu-item">
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}

      </ul>

      <div className="item-search">
        <FontAwesomeIcon icon={"search"} />
      </div>
    </nav>
  );
};

MainNavigation.propTypes = {
  menu: PropTypes.object,
};

export default MainNavigation;

/*  <li className="menu-item">
      <a href="index.html">Home</a>
    </li>
    <li className="menu-item current-menu-item menu-item-has-children">
      <a href="#">Features</a>
      <ul className="sub-menu">
        <li className="menu-item menu-item-has-children">
          <a href="#">Standard Layout</a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="standard-left-sidebar.html">Left Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="standard-right-sidebar.html">Right Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="standard-without-sidebar.html">Without Sidebar</a>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#">Grid Layout</a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="grid-left-sidebar.html">Left Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="grid-right-sidebar.html">Right Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="grid-without-sidebar.html">Without Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="grid-1st-large.html">1st Large</a>
            </li>
            <li className="menu-item">
              <a href="grid-three-column.html">Three Column</a>
            </li>
            <li className="menu-item">
              <a href="grid-1st-large-three-column.html">
                Three Column 1st Large
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#">List Layout</a>
          <ul className="sub-menu">
            <li className="menu-item">
              <a href="list-left-sidebar.html">Left Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="list-right-sidebar.html">Right Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="list-without-sidebar.html">Without Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="list-1st-large.html">1st Large</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="#">Lifestyle</a>
    </li>
    <li className="menu-item">
      <a href="single.html">Single</a>
    </li>
    <li className="menu-item">
      <a href="about.html">About</a>
    </li>
    <li className="menu-item">
      <a href="contact.html">Contact</a>
    </li>*/
