import React from 'react';
import {Avatar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import MarkChatUnreadIcon from '@material-ui/icons/MarkunreadOutlined';
import FilesIcon from '@material-ui/icons/FolderOpenOutlined';
import ChannelsIcon from '@material-ui/icons/RadioOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

import './css/Header.css';
import { useStateValue } from '../StateProvider';



function Header() {

    const [{user}] = useStateValue();

    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <MenuIcon />
                </div>
                <div className="header-search">
                    <div className="searchHeader">
                        <AccessTimeIcon id="searchBarIcon" />
                        <SearchIcon id="searchIcon" />
                        <input className="search-bar" placeholder="Search Channel" />
                        <CloseIcon id="searchIcon" />

                        <HelpOutlineIcon id="searchBarIcon" />
                    </div>

                    <div className="searchFooter">
                        <p>I'm looking for:</p>
                        <div className="focusedSearch-filters">
                            <div className="focusedSearch-filter"><MarkChatUnreadIcon /> Messages</div>
                            <div className="focusedSearch-filter"><FilesIcon /> Files</div>
                            <div className="focusedSearch-filter"><ChannelsIcon /> Channels</div>
                            <div className="focusedSearch-filter"><PeopleIcon /> People</div>
                        </div>
                    </div>
                    
                </div>
                <div className="header-right">
                    <Avatar
                        className="header-avatar"
                        alt={user?.displayName}
                        src={user ? user?.photoURL : "https://a.slack-edge.com/bfaba/img/avatars-teams/ava_0012-230.png"}
                    />
                </div>
            </div>

        </div>

    )
}

export default Header
