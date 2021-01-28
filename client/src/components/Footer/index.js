import React from "react";
import "./style.css";
import moment from "moment";

const currentTime = moment().format('Do MMMM YYYY');

function Footer() {
    return (
        <footer className="footer">
            <span>{currentTime}</span>
        </footer>
    )
}

export default Footer;