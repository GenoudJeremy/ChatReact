import {store} from "../index";
const url = 'ws://172.16.64.11:8080';
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
