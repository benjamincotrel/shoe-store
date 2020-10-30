import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Link from "components/link/Link";
import TextButton from "components/button/TextButton";
import * as actions from "state/actions";

import "./header.scss";

const Header = () => {
    const dispatch = useDispatch();
    const isAlertingDisabled = useSelector(state => state.isAlertingDisabled);

    const handleAlertingClicked = () => {
        toast.dismiss();
        
        dispatch(actions.toggleAlerting());
    };

    return (
        <header className="header">
            <Link to="/feed">Live Feed</Link>
            <Link to="/stores">Stores</Link>
            <Link to="/models">Models</Link>
            <TextButton onClick={handleAlertingClicked}>{isAlertingDisabled ? "Enable Alerting" : "Disable Alerting"}</TextButton>
        </header>
    );
};

export default Header;