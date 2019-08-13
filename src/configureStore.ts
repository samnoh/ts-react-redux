import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';
import { IAppState } from './actions';

export const store: Store<IAppState> = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f: any) => f
    )
);
