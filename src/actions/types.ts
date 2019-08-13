import { Action } from 'redux';

import { Todo } from './todoActions';

export interface ITodoState {
    readonly data: Todo[];
    readonly loading: boolean;
    readonly error: any;
}

export interface IAppState {
    readonly todos: ITodoState;
}

export enum ActionTypes {
    GET_TODOS_LOADING,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR,
    DELETE_TODOS
}

export interface ITodoLoadingAction extends Action<ActionTypes.GET_TODOS_LOADING> {
    type: ActionTypes.GET_TODOS_LOADING;
}

export interface IGetTodosAction extends Action<ActionTypes.GET_TODOS_SUCCESS> {
    type: ActionTypes.GET_TODOS_SUCCESS;
    payload: Todo[];
}

export interface ITodoErrorAction extends Action<ActionTypes.GET_TODOS_ERROR> {
    type: ActionTypes.GET_TODOS_ERROR;
    error: any;
}

export interface IDeleteTodoAction {
    type: ActionTypes.DELETE_TODOS;
    payload: number;
}

export type TodoActions =
    | ITodoLoadingAction
    | IGetTodosAction
    | ITodoErrorAction
    | IDeleteTodoAction;
