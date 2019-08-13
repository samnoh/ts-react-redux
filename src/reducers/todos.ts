import { Todo, GetTodosAction } from '../actions';
import { ActionTypes } from '../actions';

const initialState: Todo[] = [];

export const todosReducer = (state: Todo[] = initialState, action: GetTodosAction) => {
    switch (action.type) {
        case ActionTypes.getTodos:
            return action.payload;
        default:
            return state;
    }
};
