import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from '@material-ui/core';
import { SearchOutlined} from "@material-ui/icons";


function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__header">
            
            <Avatar src="https://raw.githubusercontent.com/sitebase/react-avatar/HEAD/docs/example1.jpg"/>
            <div className="sidebar__headerRight">
              <IconButton>
              <DonutLargeIcon/>
               </IconButton>
               <IconButton>
                <ChatIcon/>
               </IconButton>
               <IconButton>
                <MoreVertIcon/>
               </IconButton>
            </div>
        </div>

        <div className="sidebar__search">
        <div className="sidebar__searchContainer">
            <SearchOutlined/>
            <input placeholder="Search or start new chat" type="text"/>
        </div>
        </div>
        </div>
    );
}

export default Sidebar
