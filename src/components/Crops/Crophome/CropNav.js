import React from "react";
import "../css/CropNav.css";

const CropNav = () => {
  return (
    <div className="topnavv">
      {" "}
      {/* Use the same class name as in your HTML */}
      <a className="active" href="#home">
        MANDI.COM - Your Livestock Marketplace
      </a>
      <div className="search-coontainer">
        {" "}
        {/* Use the same class name as in your HTML */}
        <form action="/action_page.php">
          <input type="text" placeholder="Search for Crops" name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CropNav;
