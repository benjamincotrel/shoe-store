import { useEffect } from "react";

const useWebSocket = (...callbacks) => {
    useEffect(() => {
        var ws = new WebSocket("ws://localhost:8080/");

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            callbacks.forEach(callback => {
                callback(data);
            });
        };
    }, []);
};

export default useWebSocket;