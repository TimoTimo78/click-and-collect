import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux';

function reducer(state = { items: [] }, action) {
    switch(action.type) {
        case "ADD_TO_CART":
            return state;

        default:
            return state;
    }
}

export function addToCart(item) {
    return {
        type: "ADD_TO_CART",
        playload : { item },
    };
}

export const store = createStore(reducer); 