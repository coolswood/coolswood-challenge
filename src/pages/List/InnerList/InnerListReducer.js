import {INNER_LIST_GET, INNER_LIST_LOADING} from "./InnerListConstants";

const initialState = {
    productsLoading: false,
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INNER_LIST_LOADING:
            return {
                ...state,
                productsLoading: true
            }

        case INNER_LIST_GET:
            return {
                ...state,
                products: action.products,
                productsLoading: false
            }

        default:
            return state;
    }
}