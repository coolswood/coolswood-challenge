import {mockFetch} from 'api';
import {getListData} from '../LiatAction';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {VENDING_LIST_GET, VENDING_LIST_LOADING} from "../ListConstants";
import {initialState} from '../ListReducer'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('api');

it('getListData', async () => {
    const expectedActions = [
        {type: VENDING_LIST_LOADING},
        {type: VENDING_LIST_GET, vendingList: []}
    ];

    mockFetch.mockResolvedValue({
        vendingList: []
    });

    const store = mockStore(initialState);

    await store.dispatch(getListData())

    const actions = store.getActions();

    expect(actions).toEqual(expectedActions)
});