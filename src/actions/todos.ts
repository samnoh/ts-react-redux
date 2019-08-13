import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface GetTodosAction {
    type: ActionTypes.getTodos;
    payload: Todo[];
}

// action creators
export const getTodos = () => async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

    dispatch<GetTodosAction>({
        type: ActionTypes.getTodos,
        payload: res.data
    });
};
