import {
    createStore,
    applyMiddleware
} from 'redux';

import {
    composeWithDevTools
} from 'redux-devtools-extension';

import thunk from 'redux-thunk';

//合并reducer
import reducer from '../modules/reducers';

const middleware = thunk;

const initializeStore = initialState => {
    return createStore(
        reducer,
        composeWithDevTools(applyMiddleware(middleware))
    );
};

export default initializeStore;