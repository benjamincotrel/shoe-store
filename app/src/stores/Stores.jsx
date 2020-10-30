import React, { useState } from "react";
import { useSelector } from "react-redux";

import Modal from "components/modal/Modal";
import TextButton from "components/button/TextButton";

import "./stores.scss";

const Stores = () => {
    const stores = useSelector(state => state.stores);
    const [selectedStore, setSelectedStore] = useState(null);

    const handleDismissModal = () => {
        setSelectedStore(null);
    };

    const renderStore = (store, index) => {
        return <div key={index} className="stores__store">
            <div>
                {store.name}
            </div>
            <TextButton onClick={() => setSelectedStore(store)}>View Store Stock</TextButton>
        </div>;
    };

    const renderStoreModel = (model, index) => {
        return <div key={index} className="stores__store-model">
            <div className="stores__store-model-name">
                {model.name}
            </div>
            <div>
                {model.inventory}
            </div>
        </div>;
    };

    return (
        <div className="stores">
            <div className="stores__title">
                Stores List
            </div>
            <div className="stores__list">
                {stores.map(renderStore)}
            </div>
            {selectedStore && <Modal isOpen={selectedStore !== null} onDismiss={handleDismissModal}>
                <div className="stores__selected-store">
                    <div className="stores__selected-store-name">
                        {selectedStore.name}
                    </div>
                    <div className="stores__selected-store-models">
                        <div className="stores__store-model">
                            <div>
                                Model
                            </div>
                            <div>
                                Inventory
                            </div>
                        </div>
                        {selectedStore.models.map(renderStoreModel)}
                    </div>
                    <div className="stores__selected-store-close">
                        <TextButton onClick={handleDismissModal}>Close</TextButton>
                    </div>
                </div>
            </Modal>}
        </div>
    );
};

export default Stores;