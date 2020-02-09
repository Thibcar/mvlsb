import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderTop from "./header-top";
import HeaderPopupSearch from "./header-popup-search";
import HeaderPopupSocial from "./header-popup-social";

import "../utils/fontawesome";
import MainNavigation from "./main-navigation";

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
                <FontAwesomeIcon icon={"share-alt"} />
              </div>
              <div className="header-search">
                {" "}
                <FontAwesomeIcon icon={"search"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderTop />
      <HeaderPopupSearch />
      <HeaderPopupSocial />
      <div className="logo">
        <div className="kd-container">
          <div className="kd-row">
            <h1>Ma Vie Sur Le Bassin</h1>
          </div>
        </div>
      </div>
      <MainNavigation />
    </header>
  );
};

export default Header;
