import React from "react";



const HeaderPopupSearch = () => {
  return (
    <div className="header-popup header-popup-search">
      <div className="header-close">x</div>
      <div className="header-table">
        <div className="header-tb-cell">
          <form action="#">
            <input type="text" placeholder="Press enter to search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeaderPopupSearch;
