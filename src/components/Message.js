import React from 'react';
import './css/Message.css';

function Message({ message, timestamp, user, img }) {

    
    let date = new Date(timestamp?.toDate()).toUTCString().split(" ");
    let time = new Date(timestamp?.toDate()).toLocaleTimeString().split(":");
    let meridiem = new Date(timestamp?.toDate()).toLocaleTimeString().split(" ")[1];

    return (
        <div>

            <div className="date">
                {date[0]} {date[2]} {date[1]}
            </div>
            
            <div className="message_container">
                
                <div className="message_content">

                    <div className="message_img">
                        <img src={img} height={40} alt="User Img" />
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

            </div>

        </div>
    )
}

export default Message;
