import React from "react";

import Link from "components/link/Link";

import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <Link to="/feed">Live Feed</Link>
            <Link to="/stores">Stores</Link>
            <Link to="/models">Models</Link>
        </header>
    );
};

export default Header;