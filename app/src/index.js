import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { toast } from "react-toastify";

import App from "./App";
import store from "state/store";

import "./index.scss";
import "react-toastify/dist/ReactToastify.min.css";

toast.configure({ autoClose: 5000, position: toast.POSITION.TOP_RIGHT });

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);
