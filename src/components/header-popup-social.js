import React from "react";

import "../utils/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderPopupSocial = () => {
  return (
    <div className="header-popup header-popup-social">
      <div className="header-close">x</div>
      <div className="header-table">
        <div className="header-tb-cell">
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
              <FontAwesomeIcon icon={['fab','google-plus']} />
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
    </div>
  );
};

export default HeaderPopupSocial;
