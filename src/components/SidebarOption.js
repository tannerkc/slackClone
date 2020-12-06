import React from 'react';
import { useHistory } from 'react-router-dom';
// import {createBrowserHistory} from 'history';
import { withRouter } from "react-router-dom";
import db from '../firebase';


import './css/SidebarOption.css';

function SidebarOption({Icon, title, channel, id, addChannelOption }) {

    const history = useHistory();
    // const history = createBrowserHistory();

    const selectChannel = () => {
        if(id){
            history.push(`/channel/${id}`)
        }
        else{
            history.push(title);
        }
    }

    const addChannel = () => {
        const channelName = prompt('Enter channel name');

        if(channelName){
            db.collection('channels').add({
                name: channelName
            })
        }
    }

    return (
        <div className={channel ? "sidebarOption channel" : "sidebarOption"} onClick={addChannelOption ? addChannel : selectChannel} >
            {Icon && <Icon className="sidebarOption-icon" />}
            {Icon ? <h3>{title}</h3> : <h3><span className="sidebarOption-icon">#</span> {title}</h3>}
        </div>
    )
}

export default withRouter(SidebarOption);
