import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat({ name, lastMessage, lastSeen }) {
  console.log(lastMessage);
  const truncateString = (str) => {
    if (str === undefined) return str;
    else if (str.length <= 25) return str;

    return str.slice(0, 25) + "...";
  };

  lastMessage = truncateString(lastMessage);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/initials/${name}.svg`} />
      <div className="sidebarChat__detail">
        <h3>{name}</h3>
        <p>{lastMessage}</p>
        <p>{lastSeen}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
