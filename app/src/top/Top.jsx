import React from "react";
import { useSelector } from "react-redux";
import {ReactComponent as First} from "./svg/first.svg";
import {ReactComponent as Second} from "./svg/second.svg";
import {ReactComponent as Third} from "./svg/third.svg";

import "./top.scss";

const Top = () => {
    const topStores = useSelector(state => state.topStores);

    const renderTopStore = (topStore, index) => (<div key={index} className="top__store">
        <div className="top__store-infos">
            <div className="top__store-title">
                {topStore.name}
            </div>
            <div>
                {topStore.sales} sales
            </div> 
        </div>
        <div className="top__store-rank">
            {index === 0 && <First className="top__store-rank-icon" />}
            {index === 1 && <Second className="top__store-rank-icon" />}
            {index === 2 && <Third className="top__store-rank-icon" />}
        </div>
    </div>);

    return (
        <div className="top">
            <div className="top__title">
                Your top performing stores
            </div>
            <div className="top__list">
                {topStores.map(renderTopStore)}
            </div>
        </div>
    );
};

export default Top;