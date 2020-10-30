import React, { useState } from "react";
import { useSelector } from "react-redux";

import Modal from "components/modal/Modal";
import TextButton from "components/button/TextButton";

import "./models.scss";

const Models = () => {
    const models = useSelector(state => state.models);
    const [selectedModel, setSelectedModel] = useState(null);

    const handleDismissModal = () => {
        setSelectedModel(null);
    };

    const renderModel = (store, index) => {
        return <div key={index} className="models__model">
            <div>
                {store.name}
            </div>
            <TextButton onClick={() => setSelectedModel(store)}>View Model Stock</TextButton>
        </div>;
    };

    const renderModelStore = (model, index) => {
        return <div key={index} className="models__model-store">
            <div className="models__model-store-name">
                {model.name}
            </div>
            <div>
                {model.inventory}
            </div>
        </div>;
    };

    return (
        <div className="models">
            <div className="models__title">
                Models List
            </div>
            <div className="models__list">
                {models.map(renderModel)}
            </div>
            {selectedModel && <Modal isOpen={selectedModel !== null} onDismiss={handleDismissModal}>
                <div className="models__selected-model">
                    <div className="models__selected-model-name">
                        {selectedModel.name}
                    </div>
                    <div className="models__selected-model-stores">
                        <div className="models__model-store">
                            <div>
                                Store
                            </div>
                            <div>
                                Inventory
                            </div>
                        </div>
                        {selectedModel.stores.map(renderModelStore)}
                    </div>
                    <div className="models__selected-model-close">
                        <TextButton onClick={handleDismissModal}>Close</TextButton>
                    </div>
                </div>
            </Modal>}
        </div>
    );
};

export default Models;