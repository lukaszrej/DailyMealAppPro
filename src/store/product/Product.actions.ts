import {ADD_PRODUCT} from "./Product.types";

export const addProduct = () => {
    console.log('dispatch an action productAdd | Product.actions.ts');

    return (dispatch: Function) => {
        dispatch({
            type: ADD_PRODUCT,
            payload: "example payload"
        })
    }
};