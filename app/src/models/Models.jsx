import React from "react";
import { useSelector } from "react-redux";

const Models = () => {
    const models = useSelector(state => state.models);

    const renderModel = (model, index) => {
        return <div key={index}>
            {model.name}
        </div>;
    };

    return (
        <div>
            {models.map(renderModel)}
        </div>
    );
};

export default Models;