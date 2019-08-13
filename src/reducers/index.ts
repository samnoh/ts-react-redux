import { combineReducers } from 'redux';

import { todosReducer } from './todos';
import { TodosState } from '../actions';

export interface StoreState {
    todos: TodosState;
}

export const rootReducer = combineReducers<StoreState>({
    todos: todosReducer
});
