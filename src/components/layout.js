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
import Footer from './footer/footer';

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleSideMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <div id="wrapper">
                <div className="kd-container">
                    <div className="kd-row">{children}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
