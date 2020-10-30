import * as actionTypes from "./actionTypes";
import reducerHelpers from "./reducerHelpers";

const defaultState = {
    feed: [],
    stores: [],
    models: []
};

const handleNewSaleAdded = (state, { store, model, inventory }) => {
    const feed = [
        { store, model, inventory },
        ...state.feed
    ];

    let isNewStore = true;
    let isNewModel = true;

    let stores = state.stores.map((s) => {
        if (s.name === store) {
            s.models = reducerHelpers.updateStoreModels(s.models, model, inventory);
            isNewStore = false;
        }

        return s;
    });

    if (isNewStore) {
        stores = reducerHelpers.createStore(state.stores, store, model, inventory);
    }

    let models = state.models.map((m) => {
        if (m.name === model) {
            m.stores = reducerHelpers.updateModelStores(m.stores, store, inventory);
            isNewModel = false;
        }

        return m;
    });

    if (isNewModel) {
        models = reducerHelpers.createModel(state.models, model, store, inventory);
    }

    return {
        ...state,
        feed,
        stores,
        models
    };
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.ADD_NEW_SALE:
        return handleNewSaleAdded(state, action);
    default: 
        return state;
    }
};

export default reducer;