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
    List,
    Create
} from "@material-ui/icons"

import {Link} from 'react-router-dom'

import './sidebar.css'

export default function SideBar() {
  return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItems active">
                            <LineStyle className="sidebarIcons"/>
                            Home
                        </li>
                    </Link>
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
                    <Link to="/user" className='link'>
                        <li className="sidebarListItems active">
                            <PersonOutline className="sidebarIcons"/>
                            Users
                        </li>
                    </Link>

                    <Link to="/newUser" className='link'>
                        <li className="sidebarListItems">
                            <Storefront  className="sidebarIcons"/>
                            Create
                        </li>
                    </Link>
                    <Link to="/showall" className="link">
                        <li className="sidebarListItems">
                            <List className="sidebarIcons"/>
                            View All
                        </li>
                    </Link>
                    <li className="sidebarListItems">
                        <BarChart   className="sidebarIcons"/>
                        Reports
                    </li>
                    <Link to="/createnewItem" className='link'>
                        <li className="sidebarListItems">
                            <Create   className="sidebarIcons"/>
                            New Item
                        </li>
                    </Link>
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
