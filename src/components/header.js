import React from "react"

import  HeaderTop from './headerTop';

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
                {/* Create Component HeaderShare */}
                <i className="fa fa-share-alt"></i>
              </div>
              <div className="header-search">
                {" "}
                {/* Create Component Header Search */}
                <i className="fa fa-search"></i>
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
