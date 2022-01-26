import './widgetsm.css'
import React from 'react';
import {Visibility} from '@material-ui/icons'

export default function WidgetsSM() {
  return (
        <div className="widgetsmall">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetsmallList">
                <li className="widgetsmallListItem">
                    <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetsmallImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmallUsername">Anna Keller</span>
                        <span className="widgetsmallUserDetail">Software Enginner</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetsmallListItem">
                    <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetsmallImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmallUsername">John Wick</span>
                        <span className="widgetsmallUserDetail">Doctor</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetsmallListItem">
                    <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetsmallImg" />
                    <div className="widgetsmUser">
                        <span className="widgetsmallUsername">Jane Doe</span>
                        <span className="widgetsmallUserDetail">Software Enginner</span>
                    </div>
                    <button className="widgetsmallButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}
