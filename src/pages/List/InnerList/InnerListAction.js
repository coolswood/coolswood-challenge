import {mockFetch} from 'api';
import {INNER_LIST_LOADING, INNER_LIST_GET} from "./InnerListConstants";

export const getInnerListData = (type) => {
    return (dispatch) => {
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
}