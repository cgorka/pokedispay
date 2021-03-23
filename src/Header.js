import React, {PropTypes} from 'react'
import mainLogo from "./img/logo.png";

const Header = (props) => {
    return (
        <header className="header">
            <div className="topBar">
                <a href="#" className="topBar__logo">
                    <img id="mainLogo" width='350px'
                         src={mainLogo}
                         alt="Logo">
                    </img></a>
                <nav className="topBar__nav">
                    <ul className="topBar__nav__list">
                        <li className="topBar__nav__item"><a href="/series">Series</a></li>
                        <li className="topBar__nav__item"><a href="/changelog">Changelog</a></li>
                        <li className="topBar__nav__item"><a href="/help">Help</a></li>
                        <li className="topBar__nav__item"><a href="https://ko-fi.com/A814HDT"
                                                             target="_blank">Donate</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
