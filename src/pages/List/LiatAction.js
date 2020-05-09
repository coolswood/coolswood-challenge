import {mockFetch} from 'api';
import {VENDING_LIST_GET, VENDING_LIST_LOADING} from "./ListConstants";

export const getListData = () => {
    return (dispatch) => {
        dispatch({
            type: VENDING_LIST_LOADING
        })

        return mockFetch('/rs/v1/apparatus').then(({vendingList}) => {
            return dispatch({
                type: VENDING_LIST_GET,
                vendingList: vendingList
            })
        })
    }
}