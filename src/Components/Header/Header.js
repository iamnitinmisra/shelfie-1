import React from "react";

function Header(props){
  return (
    <div className="header">
      <img className="logo" src="" alt="shelfie-logo" />
      <h1>SHELFIE</h1>
      <div className="header-buttons">
        <button>Dashboard</button>
        <button>Add Inventory</button>
      </div>
    </div>
  );
}

export default Header;


