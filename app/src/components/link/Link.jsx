import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./link.scss";

const Link = ({ children, to }) => {
    return (
        <NavLink className="link" to={to} activeClassName="link--selected">
            {children}
        </NavLink>
    );
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
};

export default Link;