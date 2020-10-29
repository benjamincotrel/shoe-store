import React from "react";
import { useSelector } from "react-redux";

import "./feed.scss";

const Feed = () => {
    const feed = useSelector(state => state.feed);

    const renderFeedRow = (feedRow, index) => {
        return <div key={index} className="feed__row">
            <div>
                {feedRow.store}
            </div>
            <div>
                {feedRow.model}
            </div>
            <div>
                {feedRow.inventory} remaining
            </div>
        </div>;
    };

    return (
        <div className="feed">
            {feed.map(renderFeedRow)}
        </div>
    );
};

export default Feed;