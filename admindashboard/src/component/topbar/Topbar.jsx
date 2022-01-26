import React from 'react';
import "./topbar.css"
import {NotificationsNone, Language, Settings} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <div className="logo">Admin</div>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
    );
}
