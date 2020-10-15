import React from 'react';
import "./Message.css";
import Avatar from "@material-ui/core/Avatar";
function Message(props) {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Sagar Siwakoti
                <span className="message__timestamp">this is a timestamp</span>
                </h4>
            </div>
        </div>
    );
}

export default Message;