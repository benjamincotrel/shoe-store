import React from "react";
import { useSelector } from "react-redux";

import "./feed.scss";

const Feed = () => {
    const feed = useSelector(state => state.feed);

    const renderFeedRow = (feedRow, index) => {
        return <div key={index} className="feed__row">
            <div className="feed__cell">
                {feedRow.store}
            </div>
            <div className="feed__cell">
                {feedRow.model}
            </div>
            <div className="feed__cell">
                {feedRow.inventory}
            </div>
        </div>;
    };

    return (
        <div className="feed">
            <div className="feed__title">
                Sales Live Feed
            </div>
            <div className="feed__table">
                <div className="feed__table-header-row">
                    <div className="feed__table-header-cell">
                        Store
                    </div>
                    <div className="feed__table-header-cell">
                        Model
                    </div>
                    <div className="feed__table-header-cell">
                        Inventory
                    </div>
                </div>
                {feed.map(renderFeedRow)}
            </div>
        </div>
    );
};

export default Feed;