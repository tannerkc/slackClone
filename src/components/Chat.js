import React, { useEffect, useState } from 'react';
// import { useParams, withRouter } from "react-router-dom";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import "./css/Chat.css";
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat(props) {

    // const { channelId } = useParams();

    const channelId = props.match.params.channelId;
    const [channelDetails, setChannelDetails] = useState(null)
    const [channelMessages, setChannelMessages] = useState(null)
    const [channelUsers, setChannelUsers] = useState(null)


    useEffect(() => {

        if(channelId){
            db.collection('channels').doc(channelId)
            .onSnapshot((snapshot) => 
                setChannelDetails(snapshot.data())
            );
        }

        db.collection('channels').doc(channelId).collection('messages')
        .orderBy('timestamp', 'asc').onSnapshot((snapshot) =>
            setChannelMessages(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
        )

        db.collection('channels').doc(channelId).collection('users')
        .limit(3).onSnapshot((snapshot) =>
            setChannelUsers(snapshot.docs.map(doc => doc.data()))
        )

    }, [channelId])

    console.log(channelMessages);

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
                    <div className="userimg">
                        {channelUsers?.map(({userImg, user} )=> (

                            <img src={userImg} alt={user} />

                        ))}
                    </div>
                        
                    <p>
                        <PersonAddOutlinedIcon id="chatIcon" />
                        <InfoOutlinedIcon id="chatIcon" />
                    </p>
                </div>

            </div>

            <div className="chat_body">

                {channelMessages?.map((message)=> (

                        <Message message={message.data.message} timestamp={message.data.timestamp} user={message.data.username} img={message.data.userImg} channelId={channelId} id={message.id} key={message.id} />

                ))}

            </div>

            <ChatInput channelName={channelDetails?.name} channelId={channelId} /> 

        </div>
    );
}

export default Chat;
