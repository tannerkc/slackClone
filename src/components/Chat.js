import React from 'react';
import { useParams } from "react-router-dom";
import "./css/Chat.css";

const Chat = () => {

    const { channelId } = useParams();

    return (
        <div className="chat">
            <h2>This is the {channelId} room</h2>
        </div>
    );
}

export default Chat;
