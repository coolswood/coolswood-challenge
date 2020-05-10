import {INNER_LIST_GET, INNER_LIST_LOADING} from "./InnerListConstants";
import {TProducts} from "./type";

export type TInitialState = {
    productsLoading: boolean,
    products: Array<TProducts> | undefined
};

export type TAction = {
    type: typeof INNER_LIST_LOADING | typeof INNER_LIST_GET,
    productsLoading?: boolean,
    products?: Array<TProducts> | undefined
}

const initialState: TInitialState = {
    productsLoading: false,
    products: []
};

export default (state = initialState, action: TAction): TInitialState => {
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