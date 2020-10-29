import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import useWebSocket from "hooks/useWebSocket";

import "./App.scss";

const Feed = lazy(() => import("./feed/Feed"));
const Stores = lazy(() => import("./stores/Stores"));
const Models = lazy(() => import("./models/Models"));

const App = () => {
    useWebSocket();
    
    return (
        <div className="app">
            <BrowserRouter>
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
