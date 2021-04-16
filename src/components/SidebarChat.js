import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat({ avatar, name, lastMessage, lastSeen }) {
  return (
    <div className="sidebarChat">
      <Avatar src={avatar} />
      <div className="sidebarChat__detail">
        <h3>{name}</h3>
        <p>{lastMessage}</p>
        <p>{lastSeen}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
