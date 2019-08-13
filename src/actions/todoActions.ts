import { ThunkDispatch } from 'redux-thunk';

import * as api from '../api';
import { ActionTypes } from './types';

export interface TodosState {
    data: Todo[];
    loading: boolean;
    error: string;
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface GetTodosAction {
    type:
        | ActionTypes.GET_TODOS_ERROR
        | ActionTypes.GET_TODOS_LOADING
        | ActionTypes.GET_TODOS_SUCCESS;
    payload?: Todo[];
    error?: any;
}

export interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODOS;
    payload: number;
}

// action creators
export const getTodos = () => async (
    dispatch: ThunkDispatch<TodosState, undefined, GetTodosAction>
): Promise<void> => {
    try {
        dispatch<GetTodosAction>({ type: ActionTypes.GET_TODOS_LOADING });
        const res = await api.getTodos();
        dispatch<GetTodosAction>({
            type: ActionTypes.GET_TODOS_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        console.error(e);
        dispatch<GetTodosAction>({ type: ActionTypes.GET_TODOS_ERROR, error: e });
    }
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
    type: ActionTypes.DELETE_TODOS,
    payload: id
});
