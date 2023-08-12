// import react from 'react
import "./Header.css";
import logo from "./assessts/LOGO.png";
import dropicon from "./assessts/dropdown-icon.png"

import searchIcon from "./assessts/Search _icon.png"
const Header = () => {
  return (
    <div className="Header-parent">
      <div className="header-details">
        <div className="header-details-left">
          <div className="logo-image">
            <img src={logo} alt="logo" className="header-logo" />
          </div>
          <div className="header-courses">
            <div className="header-courses-1">
                <h3>Courses</h3>
                <img src={dropicon} />
            </div>
            <div className="header-courses-1">
                <h3>Programs</h3>
                <img src={dropicon} />
            </div>
          </div>
        </div>

        <div className="header-details-right">
           <img src={searchIcon} alt="seach-icon" className="search-icon"/>
           <p>Login</p>
           <button className="btn-class" role="button">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
