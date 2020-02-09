import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  HeaderTop from './headerTop';

import '../utils/fontawesome';

const Header = () => {
  return (
    <header className="header">
      <div className="wrap-header-responsive">
        <div className="header-responsive">
          <div className="kd-container">
            <div className="kd-row">
              <div className="menu-mobile">
                {" "}
                {/* Create Component MenuMobile */}
                <span className="item item-1"></span>
                <span className="item item-2"></span>
                <span className="item item-3"></span>
              </div>
              <div className="header-share">
                {" "}
                <FontAwesomeIcon icon={'share-alt'} />
              </div>
              <div className="header-search">
                {" "}
                <FontAwesomeIcon icon={'search'} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderTop />
    </header>
  )
}

export default Header
