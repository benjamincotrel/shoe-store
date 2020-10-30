import React, { useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";

import ClickOutside from "../click-outside/ClickOutside";

import "./modal.scss";

const Modal = ({ className, isOpen, onDismiss, children }) => {
    const modalRef = useRef();

    if (!isOpen) {
        return null;
    }

    const modal = (
        <div className="modal">
            <ClickOutside ref={modalRef} className={classNames(className, "modal__content")} onClickOutside={onDismiss}>
                {children}
            </ClickOutside>
        </div>
    );

    return ReactDOM.createPortal(
        modal,
        document.body
    );
};

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    onDismiss: PropTypes.func
};

export default Modal;
