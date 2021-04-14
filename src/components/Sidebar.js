import React from 'react'
import './Sidebar.css'
import { Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
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
            </div>
            <div className="sidebar__input">
                <div className="input">
                    <SearchIcon className='icon'/>
                    <input type="text" placeholder='search or start a new chat'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
