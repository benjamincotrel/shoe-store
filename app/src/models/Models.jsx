import React from "react";
import { useSelector } from "react-redux";

const Feed = () => {
    const feed = useSelector(state => state.feed);

    const renderFeedRow = (feedRow, index) => {
        return <div key={index}>
            {feedRow.store}
            {feedRow.model}
            {feedRow.inventory}
        </div>;
    };

    return (
        <div>
            {feed.map(renderFeedRow)}
        </div>
    );
};

export default Feed;