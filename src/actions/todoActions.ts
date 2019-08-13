import { Action } from 'redux';
import { Dispatch } from 'redux';

import * as api from '../api';
import { ActionTypes } from './types';

// Interfaces
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodosLoadingAction extends Action<ActionTypes.GET_TODOS_LOADING> {}

export interface IGetTodosAction extends Action<ActionTypes.GET_TODOS_SUCCESS> {
    payload: Todo[];
}

export interface ITodosErrorAction extends Action<ActionTypes.GET_TODOS_ERROR> {
    error: any;
}

export interface IDeleteTodoAction extends Action<ActionTypes.DELETE_TODOS> {
    payload: number;
}

export type TodoActions =
    | ITodosLoadingAction
    | IGetTodosAction
    | ITodosErrorAction
    | IDeleteTodoAction;

// action creators
export const getTodos = () => async (dispatch: Dispatch): Promise<void> => {
    try {
        dispatch<ITodosLoadingAction>({ type: ActionTypes.GET_TODOS_LOADING });
        const res = await api.getTodos();
        dispatch<IGetTodosAction>({
            type: ActionTypes.GET_TODOS_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        console.error(e);
        dispatch<ITodosErrorAction>({ type: ActionTypes.GET_TODOS_ERROR, error: e });
    }
};

export const deleteTodo = (id: number): IDeleteTodoAction => ({
    type: ActionTypes.DELETE_TODOS,
    payload: id
});
