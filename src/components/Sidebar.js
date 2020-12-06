import React, { useEffect, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertCommentOutlined';
import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowIcon from '@material-ui/icons/KeyboardArrowDown';
import InboxIcon from '@material-ui/icons/InboxOutlined';
import AltIcon from '@material-ui/icons/AlternateEmailOutlined';
import AddIcon from '@material-ui/icons/Add';
import './css/Sidebar.css';
import SidebarOption from './SidebarOption';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [{user}] = useStateValue();


    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot =>(
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-info">
                <h2>Group Name</h2>
                    <h3>
                        <FiberManualRecordIcon id="alertIcon" />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon id="create" />
            </div>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon}  title="All DMs" />
            <SidebarOption Icon={AltIcon} title="Mentions & reactions" />
            <SidebarOption Icon={MoreIcon} title="More" />
            <SidebarOption Icon={ArrowIcon} title="Channels" />

            {channels.map(channel => (
            
                <SidebarOption channel id={channel.id} title={channel.name} key={channel.id} />

            ))}

            <span className="border-top"> 
                <SidebarOption Icon={AddIcon} addChannelOption title="Add channels" />
            </span>
           
        </div>
    )
}

export default Sidebar;
