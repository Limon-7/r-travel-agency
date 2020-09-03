import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/airbnb.png?itok=d2X_Ds1a"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" placeholder="Where are you going?" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
