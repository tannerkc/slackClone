import React, { useEffect, useState } from 'react';
// import { useParams, withRouter } from "react-router-dom";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import "./css/Chat.css";
import db from '../firebase';
import Message from './Message';

function Chat(props) {

    // const { channelId } = useParams();

    const channelId = props.match.params.channelId;
    const [channelDetails, setChannelDetails] = useState(null)
    const [channelMessages, setChannelMessages] = useState(null)


    useEffect(() => {

        if(channelId){
            db.collection('channels').doc(channelId)
            .onSnapshot((snapshot) => 
                setChannelDetails(snapshot.data())
            );
        }

        db.collection('channels').doc(channelId).collection('messages')
        .orderBy('timestamp', 'asc').onSnapshot((snapshot) =>
            setChannelMessages(snapshot.docs.map(doc => doc.data()))
        )
        
    }, [channelId])

    return (
        <div className="chat">

            <div className="chat_header">

                <div className="chat_headerLeft">
                    <h4 className="chat_channelName">
                        <strong>#{channelDetails?.name}</strong>
                    </h4>
                    <StarBorderOutlinedIcon id="chatIcon" />
                </div>

                <div className="chat_headerRight">
                    <p>
                        <PersonAddOutlinedIcon id="chatIcon" />
                        <InfoOutlinedIcon id="chatIcon" />
                    </p>
                </div>

            </div>

            <div className="chat_body">

                {channelMessages?.map(({message, userImg, username, timestamp} )=> (

                        <Message message={message} timestamp={timestamp} user={username} img={userImg} />

                ))}

            </div>

        </div>
    );
}

export default Chat;
