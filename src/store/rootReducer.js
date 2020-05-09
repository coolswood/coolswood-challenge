import { combineReducers } from 'redux';

import listReducer from 'pages/List/ListReducer';
import innerListReducer from 'pages/List/InnerList/InnerListReducer';

export default combineReducers({
    listReducer,
    innerListReducer,
})