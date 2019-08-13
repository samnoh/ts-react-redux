import { combineReducers } from 'redux';

import { todosReducer, ITodoState } from './todos';

export interface IAppState {
    readonly todos: ITodoState;
}

export const rootReducer = combineReducers<IAppState>({
    todos: todosReducer
});
