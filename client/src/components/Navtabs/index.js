import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function NavTabs(props) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={
                        window.location.pathname === "/" || window.location.pathname === "/checkIn"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Check In
            </Link>            </li>
            <li className="nav-item">
                <Link
                    to="/checkOut"
                    className={window.location.pathname === "/checkOut" ? "nav-link active" : "nav-link"}
                >
                    Check Out
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/management"
                    className={window.location.pathname === "/management" ? "nav-link active" : "nav-link"}
                >
                    Management
            </Link>
            </li>
        </ul>
    );
}

export default NavTabs;