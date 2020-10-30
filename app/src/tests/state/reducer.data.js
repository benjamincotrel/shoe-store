const defaultState = {
    feed: [],
    stores: [],
    models: [],
    topStores: [],
    isAlertingDisabled: true
};

const firstSale = {
    store: "first sale store",
    model: "first sale model",
    inventory: 1
};

const saleWithFirstSaleStore = {
    store: "first sale store",
    model: "second sale model",
    inventory: 11
};

const saleWithFirstSaleStoreAndFirstSaleModel = {
    store: "first sale store",
    model: "first sale model",
    inventory: 22
};

const saleWithNewStoreAndNewModel = {
    store: "new store",
    model: "new model",
    inventory: 33
};

const saleWithNewStoreAndFirstSaleModel = {
    store: "new store",
    model: "first sale model",
    inventory: 44
};

const generateNewStateAfterOneSale = () => ({
    feed: [{
        store: firstSale.store,
        model: firstSale.model,
        inventory: firstSale.inventory
    }],
    stores: [{
        name: firstSale.store,
        models: [{
            name: firstSale.model,
            inventory: firstSale.inventory
        }]
    }],
    models: [{
        name: firstSale.model,
        stores: [{
            name: firstSale.store,
            inventory: firstSale.inventory
        }]
    }],
    topStores: [{
        name: firstSale.store,
        sales: 1
    }],
    isAlertingDisabled: true
});

export {
    defaultState,
    firstSale,
    saleWithFirstSaleStore,
    saleWithFirstSaleStoreAndFirstSaleModel,
    saleWithNewStoreAndNewModel,
    saleWithNewStoreAndFirstSaleModel,
    generateNewStateAfterOneSale
};