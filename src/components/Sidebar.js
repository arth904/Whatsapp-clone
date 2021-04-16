import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://pbs.twimg.com/profile_images/960126263447797761/_fAqgbu7.jpg" />

        <div className="Sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat
          name="Arth"
          lastMessage="Wanna have some drinks 🍻"
          lastSeen="12:07 AM"
        />
        <SidebarChat
          name="Udbhav Varshney"
          lastMessage="Hey 🚀"
          lastSeen="yesterday"
        />
        <SidebarChat
          name="poorab"
          lastMessage=" my name is poorab gup my name is poorab gup my name is poorab gupmy name is poorab gupmy name is poorab gupmy name is poorab gupmy name is poorab gupmy name is poorab gup"
          lastSeen="har samay"
        />
        <SidebarChat
          name="kittu"
          lastMessage="kya haal chaal"
          lastSeen="yesterday"
        />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
