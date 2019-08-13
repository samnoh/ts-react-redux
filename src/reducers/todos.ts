import { Todo, Action, ActionTypes } from '../actions';

const initialState: Todo[] = [];

export const todosReducer = (state: Todo[] = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_TODOS:
            return action.payload;
        case ActionTypes.DELETE_TODOS:
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state;
    }
};
