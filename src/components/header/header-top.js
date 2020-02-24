import React from 'react';

import { Link } from 'gatsby';

import PropTypes from 'prop-types';


import '../../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderTop = ({ menu }) => {
  return (
    <div className="header-fixed clearfix">
      <nav className="menu-top">
        <ul className="menu menu-top-list">
          {menu.items.map((item, i) => (
            <li key={i} className="menu-item">
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-socials">
        <ul>
          <li className="social-item">
            <a href="https://www.behance.net/">
            <FontAwesomeIcon icon={['fab','behance']} />
              <span>Behance</span>
            </a>
          </li>
          <li className="social-item">
            <a href="http://dribbble.com/">
             <FontAwesomeIcon icon={['fab','dribbble']} />
              <span>Dribbble</span>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={['fab','facebook']} />
              <span>Facebook</span>
            </a>
          </li>
          <li className="social-item">
            <a href="https://plus.google.com/">
            <FontAwesomeIcon icon={['fab','google']} />
              <span>Google Plus</span>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.pinterest.com/">
            <FontAwesomeIcon icon={['fab','pinterest']} />
              <span>Pinterest</span>
            </a>
          </li>
          <li className="social-item">
            <a href="http://twitter.com/">
            <FontAwesomeIcon icon={['fab','twitter']} />
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </div>    
  )
}

HeaderTop.propTypes = {
  menu: PropTypes.object,
}

export default HeaderTop
