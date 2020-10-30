import * as actionTypes from "./actionTypes";
import { updateStores, updateModels, updateTopStores } from "./reducerHelpers";

const defaultState = {
    feed: [],
    stores: [],
    models: [],
    topStores: [],
    isAlertingDisabled: true
};

const handleNewSaleAdded = (state, { store, model, inventory }) => {
    const feed = [
        { store, model, inventory },
        ...state.feed
    ];
    
    return {
        ...state,
        feed: feed.slice(0, 100),
        stores: updateStores(state.stores, store, model, inventory),
        models: updateModels(state.models, store, model, inventory),
        topStores: updateTopStores(state.topStores, store, model, inventory)
    };
};

const handleAlertingToggled = (state) => {
    return {
        ...state,
        isAlertingDisabled: !state.isAlertingDisabled
    };
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.ADD_NEW_SALE:
        return handleNewSaleAdded(state, action);
    case actionTypes.TOGGLE_ALERTING:
        return handleAlertingToggled(state);
    default: 
        return state;
    }
};

export default reducer;