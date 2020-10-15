import React from "react";
import "./SidebarChannel.css";
function SidebarChannel({ id, channel }) {
  return (
    <div className="sidebar__Channel">
      <h4>
        <span className="sidebarChannel__hash">#</span>Youtube
      </h4>
    </div>
  );
}

export default SidebarChannel;
