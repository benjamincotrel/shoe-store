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

const createTopStore = (topStores, store) => {
    return [
        ...topStores, 
        {
            name: store,
            sales: 1
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

const updateStores = (stores, store, model, inventory) => {
    let isNewStore = true;

    let updatedStores = stores.map((s) => {
        if (s.name === store) {
            s.models = updateStoreModels(s.models, model, inventory);
            isNewStore = false;
        }

        return s;
    });

    if (isNewStore) {
        updatedStores = createStore(stores, store, model, inventory);
    }

    return updatedStores;
};

const updateModels = (models, store, model, inventory) => {
    let isNewModel = true;

    let updatedModels = models.map((m) => {
        if (m.name === model) {
            m.stores = updateModelStores(m.stores, store, inventory);
            isNewModel = false;
        }

        return m;
    });

    if (isNewModel) {
        updatedModels = createModel(models, model, store, inventory);
    }

    return updatedModels;
};

const updateTopStores = (topStores, store) => {
    let isNewTopStore = true;
    
    let updatedTopStores = topStores.map((t) => {
        if (t.name === store) {
            t.sales++;
            isNewTopStore = false;
        }

        return t;
    });

    if (isNewTopStore) {
        updatedTopStores = createTopStore(topStores, store);
    }

    return updatedTopStores.sort((a, b) => b.sales - a.sales).slice(0, 3);
};

export {
    updateStores,
    updateModels,
    updateTopStores
};