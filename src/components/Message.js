import React, { useEffect, useState } from 'react';
import db from '../firebase';
import './css/Message.css';

function Message({ id, message, timestamp, user, img, channelId }) {

    console.log(id)

    
    let date = new Date(timestamp?.toDate()).toUTCString().split(" ");
    let time = new Date(timestamp?.toDate()).toLocaleTimeString().split(":");
    let meridiem = new Date(timestamp?.toDate()).toLocaleTimeString().split(" ")[1];

    const [messageComments, setMessageComments] = useState(null)
    const [messageImg, setMessageImg] = useState(null)


    useEffect(() => {

        db.collection('messages').doc(id).collection('comments')
        .orderBy('timestamp', 'asc').onSnapshot((snapshot) =>
            setMessageComments(snapshot.docs.map(doc => doc.data()))
        )

        db.collection('messages').doc(id).collection('comments')
        .limit(3).onSnapshot((snapshot) =>
            setMessageImg(snapshot.docs.map(doc => doc.userImg))
        )
        
    }, [id])

    console.log(messageImg)
    console.log(messageComments)

    return (
        <div>

            <div className="date">
                {date[0]} {date[2]} {date[1]}
            </div>

            <div className="message_container">
                
                <div className="message_content">

                    <div className="message_img">
                        <img src={img} alt="User Img" />
                    </div>

                    <div className="message_details">
                        
                        <div className="message_details_header">
                            <strong>{user}</strong> 
                            <small className="timestamp">
                                {time[0]}:{time[1]} {meridiem}
                                </small>
                        </div>

                        <div className="message">
                            {message}
                        </div>

                    </div>

                </div>

                <div className="commentContainer">
                    {messageImg?.map(({userImg, username} )=> (

                        <img src={userImg} alt={username} />

                    ))}
                </div>

            </div>

        </div>
    )
}

export default Message;
