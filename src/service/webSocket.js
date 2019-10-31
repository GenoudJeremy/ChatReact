import {store} from "../index";
const url = 'wss://srrj6.sse.codesandbox.io/';
let ws = new WebSocket(url);
ws.onopen = () => {
    console.log('connected')
};
ws.onmessage = evt => {
    try {
        const action = JSON.parse(evt.data);
        store.dispatch(action);
    }
    catch (error) {
        console.warn(error)
    }
}
export default ws
