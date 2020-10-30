const createStore = (stores, store, model, inventory) => {
    return [
        ...stores,
        {
            name: store,
            models: [
                {
                    name: model,
                    inventory
                }
            ]
        }
    ];
};

const createModel = (models, model, store, inventory) => {
    return [
        ...models,
        {
            name: model,
            stores: [
                {
                    name: store,
                    inventory
                }
            ]
        }
    ];
};

const updateStoreModels = (storeModels, model, inventory) => {
    let isNewModel = true;

    let models = storeModels.map((sm) => {
        if (sm.name === model) {
            sm.inventory = inventory;
            isNewModel = false;
        }

        return sm;
    });

    if (isNewModel) {
        models = [
            ...storeModels,
            {
                name: model,
                inventory
            }
        ];
    }

    return models.sort((a, b) => a.inventory - b.inventory);
};

const updateModelStores = (modelStores, store, inventory) => {
    let isNewStore = true;

    let stores = modelStores.map((ms) => {
        if (ms.name === store) {
            ms.inventory = inventory;
            isNewStore = false;
        }

        return ms;
    });

    if (isNewStore) {
        stores = [
            ...modelStores,
            {
                name: store,
                inventory
            }
        ];
    }

    return stores.sort((a, b) => a.inventory - b.inventory);
};

export default {
    createStore,
    createModel,
    updateStoreModels,
    updateModelStores
};