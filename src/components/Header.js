import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__user">
        <div className="user__img">
          <Avatar className='icon' src="https://pbs.twimg.com/profile_images/960126263447797761/_fAqgbu7.jpg" />
        </div>
        <div className="user__props">
          <DonutLargeIcon className='icon' />
          <ChatIcon className='icon' />
          <MoreVertIcon className='icon' />
        </div>
      </div>

      <div className="header__group">
        <div className="group__left">
          <Avatar className='icon' />
          <p>Group Name</p>
        </div>
        <div className="group__right">
            <SearchIcon className='icon' />
            <MoreVertIcon className='icon' />
        </div>
      </div>
    </div>
  );
}

export default Header;
