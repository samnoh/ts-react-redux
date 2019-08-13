import { GetTodosAction, DeleteTodoAction } from './todoActions';

export enum ActionTypes {
    GET_TODOS,
    DELETE_TODOS
}

export type Action = GetTodosAction | DeleteTodoAction;
