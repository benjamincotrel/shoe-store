import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import useWebSocket from "infrastructure/hooks/useWebSocket";
import * as actions from "state/actions";

import Header from "./layout/Header";

import "./App.scss";

const Feed = lazy(() => import("./feed/Feed"));
const Stores = lazy(() => import("./stores/Stores"));
const Models = lazy(() => import("./models/Models"));

const App = () => {
    const dispatch = useDispatch();

    const addNewSale = (data) => {
        dispatch(actions.addNewSale(data.store, data.model, data.inventory));
    };

    const alertNewSale = (data) => {
        if (data.inventory === 0) {
            toast.error(`No more stock for ${data.model} in ${data.store}`);
        }
        else if (data.inventory < 3) {
            toast.warn(`Low stock for ${data.model} in ${data.store}`);
        }
    };

    useWebSocket(addNewSale, alertNewSale);    

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Suspense fallback={null}>
                    <Switch>
                        <Route path="/feed" component={Feed} />
                        <Route path="/stores" component={Stores} />
                        <Route path="/models" component={Models} />
                        <Redirect to="/feed" />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};

export default App;
