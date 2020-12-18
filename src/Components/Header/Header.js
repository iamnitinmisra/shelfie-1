import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-container">
      {/* <img className="logo" src="" alt="shelfie-logo" /> */}
      <h1>SHELFIE</h1>
      <div className="header-buttons-container">
        <Link to="/">
          < div className='navigation-button'>Dashboard</div>
        </Link>
        <Link to="">
          <div className='navigation-button'>Add Inventory</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
