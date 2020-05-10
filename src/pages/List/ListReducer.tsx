import {VENDING_LIST_GET, VENDING_LIST_LOADING} from "./ListConstants";
import {TVendingList} from './types'

export type TinitialState = {
    vendingListLoading: boolean,
    vendingList: Array<TVendingList> | undefined
}

export type TAction = {
    type: typeof VENDING_LIST_GET | typeof VENDING_LIST_LOADING,
    vendingListLoading?: boolean,
    vendingList?: Array<TVendingList>
}

const initialState: TinitialState = {
    vendingListLoading: false,
    vendingList: []
};

export default (state = initialState, action:TAction): TinitialState => {
    switch (action.type) {
        case VENDING_LIST_LOADING:
            return {
                ...state,
                vendingListLoading: true,
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
};