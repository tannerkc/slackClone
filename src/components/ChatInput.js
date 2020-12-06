import React, { useState } from 'react';
import './css/ChatInput.css';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState('');
    const [{user}] = useStateValue();


    const sendMessage = e =>{
        e.preventDefault();

        if(channelId){
            db.collection('channels').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
                userImg: user.photoURL
            })
        }
    }

    return (
        <div className="chatInput">

            <div className="chatInput_container">

                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`} />
                    <Button type="submit" onClick={sendMessage}>Send</Button>
                </form>

                <div className="chat_footer">
                    <SendIcon id="sendIcon" onClick={sendMessage} />
                </div>

            </div>

        </div>
    )
}

export default ChatInput;
