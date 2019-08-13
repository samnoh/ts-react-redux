import { Dispatch } from 'redux';

import * as api from '../api';
import {
    ActionTypes,
    IDeleteTodoAction,
    IGetTodosAction,
    ITodoErrorAction,
    ITodoLoadingAction
} from './types';

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

// action creators
export const getTodos = () => async (dispatch: Dispatch) => {
    try {
        dispatch<ITodoLoadingAction>({ type: ActionTypes.GET_TODOS_LOADING });
        const res = await api.getTodos();
        dispatch<IGetTodosAction>({
            type: ActionTypes.GET_TODOS_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        console.error(e);
        dispatch<ITodoErrorAction>({ type: ActionTypes.GET_TODOS_ERROR, error: e });
    }
};

export const deleteTodo = (id: number): IDeleteTodoAction => ({
    type: ActionTypes.DELETE_TODOS,
    payload: id
});
