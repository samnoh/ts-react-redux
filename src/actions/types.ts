import { GetTodosAction, DeleteTodoAction } from './todoActions';

export enum ActionTypes {
    GET_TODOS_LOADING,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR,
    DELETE_TODOS
}

export type Action = GetTodosAction | DeleteTodoAction;
