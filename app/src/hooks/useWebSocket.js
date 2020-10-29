import { useEffect } from "react";
import { useDispatch } from "react-redux";

import * as actions from "state/actions";

const useWebSocket = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        var ws = new WebSocket("ws://localhost:8080/");

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            dispatch(actions.addNewSale(data.store, data.model, data.inventory));
        };
    }, []);
};

export default useWebSocket;