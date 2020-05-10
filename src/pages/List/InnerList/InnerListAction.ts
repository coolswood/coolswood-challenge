import {mockFetch} from 'api';
import {INNER_LIST_LOADING, INNER_LIST_GET} from "./InnerListConstants";
import {TAppState} from 'store/rootReducer'
import {TAction} from "./InnerListReducer";
import {Dispatch} from "redux";

export const getInnerListData = (type: string) => {
    return (dispatch: Dispatch<TAction>, getState: () => TAppState) => {
        dispatch({
            type: INNER_LIST_LOADING
        })

        return mockFetch(`/rs/v1/products/${type}`).then(({productsList}) => {
            return dispatch({
                type: INNER_LIST_GET,
                products: productsList
            })
        })
    }
};