import React from 'react';
import {
    LineStyle, 
    Timeline, TrendingUp, 
    PersonOutline, 
    Storefront, 
    AttachMoney ,
    BarChart ,
    MailOutline ,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons"

import './sidebar.css'

export default function SideBar() {
  return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems active">
                        <LineStyle className="sidebarIcons"/>
                        Home
                    </li>
                    <li className="sidebarListItems">
                        <Timeline className="sidebarIcons"/>
                        Analytics
                    </li>
                    <li className="sidebarListItems">
                        <TrendingUp className="sidebarIcons"/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Quick menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems active">
                        <PersonOutline className="sidebarIcons"/>
                        Users
                    </li>
                    <li className="sidebarListItems">
                        <Storefront  className="sidebarIcons"/>
                        Procducts
                    </li>
                    <li className="sidebarListItems">
                        <AttachMoney  className="sidebarIcons"/>
                        Transactions
                    </li>
                    <li className="sidebarListItems">
                        <BarChart   className="sidebarIcons"/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems active">
                        <MailOutline className="sidebarIcons"/>
                        Mails
                    </li>
                    <li className="sidebarListItems">
                        <DynamicFeed className="sidebarIcons"/>
                        Feedback
                    </li>
                    <li className="sidebarListItems">
                        <ChatBubbleOutline  className="sidebarIcons"/>
                        Mesaages
                    </li>
                </ul>
            </div>

            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems active">
                        <WorkOutline  className="sidebarIcons"/>
                        Manage
                    </li>
                    <li className="sidebarListItems">
                        <Timeline className="sidebarIcons"/>
                        Analytics
                    </li>
                    <li className="sidebarListItems">
                        <Report  className="sidebarIcons"/>
                        Report 
                    </li>
                </ul>
            </div>
        </div>
    );
}
