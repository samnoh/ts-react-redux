import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface GetTodosAction {
    type: ActionTypes.GET_TODOS;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODOS;
    payload: number;
}

// action creators
export const getTodos = () => async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

    dispatch<GetTodosAction>({
        type: ActionTypes.GET_TODOS,
        payload: res.data
    });
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
    type: ActionTypes.DELETE_TODOS,
    payload: id
});
