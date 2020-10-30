import * as actionTypes from "./actionTypes";

export const addNewSale = (store, model, inventory) => ({
    type: actionTypes.ADD_NEW_SALE,
    store,
    model,
    inventory
});

export const toggleAlerting = () => ({
    type: actionTypes.TOGGLE_ALERTING
});