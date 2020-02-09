import React from "react"

import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderTop = () => {
  return (
    <div className="header-fixed clearfix">
      <nav className="menu-top">
        <ul className="menu menu-top-list">
          <li className="menu-item">
            <a href="index.html">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">Trips</a>
          </li>
          <li className="menu-item">
            <a href="#">Travel</a>
          </li>
          <li className="menu-item">
            <a href="about.html">About</a>
          </li>
          <li className="menu-item">
            <a href="contact.html">Contact</a>
          </li>
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

export default HeaderTop
