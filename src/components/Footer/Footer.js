//Filename: Footer.js
//comando emmet rfce
import React from "react";
import "./Footer.css";

function Footer() {
    return (
    <footer className="footer">
            {/* <!-- replace with your own email address --> */}
        <a href="mailto:lgrandab@gmail.com" className="footer__link">
        lgrandab@gmail.com
        </a>
        <ul className="social-list">
            <li className="social-list__item">
                <a
                    className="social-list__link"
                    href="https://codepen.io/ferluchin"
                    target="_blank"
                    rel="noopener noreferrer"
            >
                <i className="fab fa-codepen"></i>
            </a>
        </li>
        <li className="social-list__item">
            <a
                className="social-list__link"
                href="http://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-dribbble"></i>
            </a>
        </li>
        <li className="social-list__item">
            <a
                className="social-list__link"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-twitter"></i>
            </a>
            </li>
            <li className="social-list__item">
            <a
                className="social-list__link"
                href="https://github.com/ferluchin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-github"></i>
            </a>
            </li>
        </ul>
        </footer>
    );
}

export default Footer;
