import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menuIcon" />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="Youtube Icon"
        />
      </div>
      <div className="header__input">
        <input
          disabled
          className="header__field"
          placeholder="Search"
          type="text"
        />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Me"
          src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/10/peaky-blinders-do-you-know-cillian-murphy-as-thomas-shelby-smoked-3000-cigarettes-in-just-2-seasons-002.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
