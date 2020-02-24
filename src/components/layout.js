/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './header/header';

import './layout.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSideMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <div id="wrapper">
      <div className="kd-container">
        <div className="kd-row">
          <Header />
          { children }
        </div>
      </div>
    </div>
    // Footer
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
