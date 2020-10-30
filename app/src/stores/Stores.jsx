import React from "react";
import { useSelector } from "react-redux";

const Stores = () => {
    const stores = useSelector(state => state.stores);

    const renderStore = (store, index) => {
        return <div key={index}>
            {store.name}
        </div>;
    };

    return (
        <div>
            {stores.map(renderStore)}
        </div>
    );
};

export default Stores;