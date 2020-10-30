import { defaultState, firstSale, generateNewStateAfterOneSale,
    saleWithFirstSaleStore, saleWithFirstSaleStoreAndFirstSaleModel, 
    saleWithNewStoreAndNewModel, saleWithNewStoreAndFirstSaleModel } from "./reducer.data";
import reducer from "../../state/reducer";
import * as actions from "../../state/actions";

describe("app reducer", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it("should handle ADD_NEW_SALE on an empty state", () => {
        expect(reducer(undefined, actions.addNewSale(firstSale.store, firstSale.model, firstSale.inventory))).toEqual(generateNewStateAfterOneSale());
    });

    it("should handle ADD_NEW_SALE on the default state", () => {
        expect(reducer(defaultState, actions.addNewSale(firstSale.store, firstSale.model, firstSale.inventory))).toEqual(generateNewStateAfterOneSale());
    });

    it("should handle ADD_NEW_SALE for an existing store and a new model", () => {
        expect(reducer(generateNewStateAfterOneSale(), actions.addNewSale(saleWithFirstSaleStore.store, saleWithFirstSaleStore.model, saleWithFirstSaleStore.inventory))).toEqual(
            {
                feed: [{
                    store: saleWithFirstSaleStore.store,
                    model: saleWithFirstSaleStore.model,
                    inventory: saleWithFirstSaleStore.inventory
                }, 
                {
                    store: firstSale.store,
                    model: firstSale.model,
                    inventory: firstSale.inventory
                }],
                stores: [{
                    name: firstSale.store,
                    models: [{
                        name: firstSale.model,
                        inventory: firstSale.inventory
                    },
                    {
                        name: saleWithFirstSaleStore.model,
                        inventory: saleWithFirstSaleStore.inventory
                    }]
                }],
                models: [{
                    name: firstSale.model,
                    stores: [{
                        name: firstSale.store,
                        inventory: firstSale.inventory
                    }]
                },
                {
                    name: saleWithFirstSaleStore.model,
                    stores: [{
                        name: saleWithFirstSaleStore.store,
                        inventory: saleWithFirstSaleStore.inventory
                    }]
                }],
                topStores: [{
                    name: firstSale.store,
                    sales: 2
                }],
                isAlertingDisabled: true
            });
    });

    it("should handle ADD_NEW_SALE for an existing store and an existing model", () => {
        expect(reducer(generateNewStateAfterOneSale(), actions.addNewSale(saleWithFirstSaleStoreAndFirstSaleModel.store, saleWithFirstSaleStoreAndFirstSaleModel.model, saleWithFirstSaleStoreAndFirstSaleModel.inventory))).toEqual(
            {
                feed: [{
                    store: saleWithFirstSaleStoreAndFirstSaleModel.store,
                    model: saleWithFirstSaleStoreAndFirstSaleModel.model,
                    inventory: saleWithFirstSaleStoreAndFirstSaleModel.inventory
                }, 
                {
                    store: firstSale.store,
                    model: firstSale.model,
                    inventory: firstSale.inventory
                }],
                stores: [{
                    name: firstSale.store,
                    models: [{
                        name: firstSale.model,
                        inventory: saleWithFirstSaleStoreAndFirstSaleModel.inventory
                    }]
                }],
                models: [{
                    name: firstSale.model,
                    stores: [{
                        name: firstSale.store,
                        inventory: saleWithFirstSaleStoreAndFirstSaleModel.inventory
                    }]
                }],
                topStores: [{
                    name: firstSale.store,
                    sales: 2
                }],
                isAlertingDisabled: true
            });
    });

    it("should handle ADD_NEW_SALE for a new store and a new model", () => {
        expect(reducer(generateNewStateAfterOneSale(), actions.addNewSale(saleWithNewStoreAndNewModel.store, saleWithNewStoreAndNewModel.model, saleWithNewStoreAndNewModel.inventory))).toEqual(
            {
                feed: [{
                    store: saleWithNewStoreAndNewModel.store,
                    model: saleWithNewStoreAndNewModel.model,
                    inventory: saleWithNewStoreAndNewModel.inventory
                }, 
                {
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
                },
                {
                    name: saleWithNewStoreAndNewModel.store,
                    models: [{
                        name: saleWithNewStoreAndNewModel.model,
                        inventory: saleWithNewStoreAndNewModel.inventory
                    }]
                }],
                models: [{
                    name: firstSale.model,
                    stores: [{
                        name: firstSale.store,
                        inventory: firstSale.inventory
                    }]
                },
                {
                    name: saleWithNewStoreAndNewModel.model,
                    stores: [{
                        name: saleWithNewStoreAndNewModel.store,
                        inventory: saleWithNewStoreAndNewModel.inventory
                    }]
                }],
                topStores: [{
                    name: firstSale.store,
                    sales: 1
                },
                {
                    name: saleWithNewStoreAndNewModel.store,
                    sales: 1
                }],
                isAlertingDisabled: true
            });
    });

    it("should handle ADD_NEW_SALE for a new store and an existing model", () => {
        expect(reducer(generateNewStateAfterOneSale(), actions.addNewSale(saleWithNewStoreAndFirstSaleModel.store, saleWithNewStoreAndFirstSaleModel.model, saleWithNewStoreAndFirstSaleModel.inventory))).toEqual(
            {
                feed: [{
                    store: saleWithNewStoreAndFirstSaleModel.store,
                    model: saleWithNewStoreAndFirstSaleModel.model,
                    inventory: saleWithNewStoreAndFirstSaleModel.inventory
                }, 
                {
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
                },
                {
                    name: saleWithNewStoreAndFirstSaleModel.store,
                    models: [{
                        name: saleWithNewStoreAndFirstSaleModel.model,
                        inventory: saleWithNewStoreAndFirstSaleModel.inventory
                    }]
                }],
                models: [{
                    name: firstSale.model,
                    stores: [{
                        name: firstSale.store,
                        inventory: firstSale.inventory
                    },
                    {
                        name: saleWithNewStoreAndFirstSaleModel.store,
                        inventory: saleWithNewStoreAndFirstSaleModel.inventory
                    }]
                }],
                topStores: [{
                    name: firstSale.store,
                    sales: 1
                },
                {
                    name: saleWithNewStoreAndFirstSaleModel.store,
                    sales: 1
                }],
                isAlertingDisabled: true
            });
    });

    it("should handle ADD_NEW_SALE with multiple stores and order them by sales in topStores", () => {
        let currentState = defaultState;

        currentState = reducer(currentState, actions.addNewSale("store 1", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 1", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 1", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 1", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 2", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 2", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 2", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 3", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 3", "test", 1));
        currentState = reducer(currentState, actions.addNewSale("store 4", "test", 1));

        expect(currentState.topStores).toEqual(
            [
                {
                    name: "store 1",
                    sales: 4
                },
                {
                    name: "store 2",
                    sales: 3
                },
                {
                    name: "store 3",
                    sales: 2
                }
            ]);
    });

    it("should handle TOGGLE_ALERTING on the default state", () => {
        expect(reducer(defaultState, actions.toggleAlerting())).toEqual({
            ...defaultState,
            isAlertingDisabled: false
        });
    });

    it("should handle TOGGLE_ALERTING when isAlertingDisabled is false", () => {
        expect(reducer({
            ...defaultState,
            isAlertingDisabled: false
        }, actions.toggleAlerting())).toEqual({
            ...defaultState,
            isAlertingDisabled: true
        });
    });
});