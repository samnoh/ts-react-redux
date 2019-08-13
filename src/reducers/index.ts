import { combineReducers } from 'redux';

import { todosReducer } from './todos';
import { IAppState } from '../actions';

export const rootReducer = combineReducers<IAppState>({
    todos: todosReducer
});
