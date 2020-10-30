import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./button.scss";

const Button = ({ className, children, ...props }) => {
    return <button className={classnames(className, "button")} {...props}>
        {children}
    </button>;
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Button;