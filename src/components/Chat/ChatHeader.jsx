import React from "react";
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import NotificationsIcon from '@material-ui/icons/Notifications';
import "./ChatHeader.css";
function ChatHeader(props) {
  return (
    <div className="chatHeader">
      <h2>Chat header</h2>
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon/>
        <EditLocationIcon/>
        <PeopleAltRoundedIcon/>
      </div>
    </div>
  );
}

export default ChatHeader;
