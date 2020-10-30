import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ClickOutside = React.forwardRef(({className = "", children, onClickOutside, ...otherProps}, ref) => {
    const clickOutsideRef = ref || useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (clickOutsideRef && !clickOutsideRef.current.contains(event.target)) {    
                onClickOutside(event);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={className} ref={clickOutsideRef} {...otherProps}>
            {children}
        </div>
    );
});

ClickOutside.propTypes = {
    children: PropTypes.node.isRequired,
    onClickOutside: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ClickOutside;