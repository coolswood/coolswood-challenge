import { combineReducers } from 'redux';

import listReducer from 'pages/List/ListReducer';
import innerListReducer from 'pages/List/InnerList/InnerListReducer';

const rootReducer = combineReducers({
    listReducer,
    innerListReducer,
})

type TRootReducer = typeof rootReducer;
export type TAppState = ReturnType<TRootReducer>;

export default rootReducer;