import {VENDING_LIST_GET, VENDING_LIST_LOADING} from '../ListConstants';
import reducer, {initialState} from '../ListReducer';

it(VENDING_LIST_LOADING, () => {
    const action = {
        type: VENDING_LIST_LOADING
    }

    initialState.vendingListLoading = false;

    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        vendingListLoading: true,
    })
})

it(VENDING_LIST_GET, () => {
    const action = {
        type: VENDING_LIST_GET,
        vendingList: [{
            id: 'string',
            name: 'string',
        }]
    }

    expect(reducer(initialState, action)).toEqual({
        ...initialState,
        vendingListLoading: false,
        vendingList: [{
            id: 'string',
            name: 'string',
        }]
    })
})