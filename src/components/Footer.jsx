import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">&copy; 2024 Tarek Gritli</p>
            <div className="footer__social">
                <a href="https://github.com/tarek-gritli" target="_blank"><FontAwesomeIcon className="git-icon" icon={faGithub} size="2x"/></a>
                <a href="https://www.linkedin.com/in/tarek-gritli/" target="_blank" className="linkedin"><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" size="2x" /></a>
            </div>
        </footer>
    );
}