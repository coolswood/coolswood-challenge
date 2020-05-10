import {mockFetch} from 'api';
import {VENDING_LIST_GET, VENDING_LIST_LOADING} from "./ListConstants";
import {TAppState} from 'store/rootReducer'
import {TAction} from "./ListReducer";
import {Dispatch} from "redux";

export const getListData = () => {
    return (dispatch: Dispatch<TAction>, getState: () => TAppState) => {
        dispatch({
            type: VENDING_LIST_LOADING,
        })

        return mockFetch('/rs/v1/apparatus').then(({vendingList}) => {

            return dispatch({
                type: VENDING_LIST_GET,
                vendingList: vendingList
            })
        })
    }
}