import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Button from "./Button";

import "./textButton.scss";

const TextButton = ({ className, ...props }) => {
    return <Button className={classnames(className, "text-button")} {...props} />;
};

TextButton.propTypes = {
    className: PropTypes.string
};

export default TextButton;