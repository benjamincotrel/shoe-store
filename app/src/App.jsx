import React, { lazy, Suspense, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

import useWebSocket from "infrastructure/hooks/useWebSocket";
import Header from "./layout/Header";
import * as actions from "state/actions";

import "./App.scss";

const Feed = lazy(() => import("./feed/Feed"));
const Stores = lazy(() => import("./stores/Stores"));
const Models = lazy(() => import("./models/Models"));
const Top = lazy(() => import("./top/Top"));

const App = () => {
    const dispatch = useDispatch();
    const isAlertingDisabled = useSelector(state => state.isAlertingDisabled);
    const isAlertingDisabledRef = useRef();

    const addNewSale = (data) => {
        dispatch(actions.addNewSale(data.store, data.model, data.inventory));
    };

    const alertNewSale = (data) => {
        if (!isAlertingDisabledRef.current) {
            if (data.inventory === 0) {
                toast.error(`No more stock for ${data.model} in ${data.store}`);
            }
            else if (data.inventory < 10) {
                toast.warn(`Low stock for ${data.model} in ${data.store}`);
            }
        }
    };

    useWebSocket(addNewSale, alertNewSale);    

    useEffect(() => {
        //https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
        isAlertingDisabledRef.current = isAlertingDisabled;
    });

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="app__container">
                    <Suspense fallback={null}>
                        <Switch>
                            <Route path="/feed" component={Feed} />
                            <Route path="/stores" component={Stores} />
                            <Route path="/models" component={Models} />
                            <Route path="/top" component={Top} />
                            <Redirect to="/feed" />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
