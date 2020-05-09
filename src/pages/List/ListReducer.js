import {VENDING_LIST_GET, VENDING_LIST_LOADING} from "./ListConstants";

const initialState = {
    vendingListLoading: false,
    vendingList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case VENDING_LIST_LOADING:
            return {
                ...state,
                vendingListLoading: true
            }

        case VENDING_LIST_GET:
            return {
                ...state,
                vendingList: action.vendingList,
                vendingListLoading: false
            }

        default:
            return state;
    }
}