import { Reducer } from 'redux';
import { Todo, ActionTypes, ITodoState, TodoActions } from '../actions';

const initialState: ITodoState = {
    data: [],
    loading: false,
    error: ''
};

export const todosReducer: Reducer<ITodoState, TodoActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_TODOS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ActionTypes.GET_TODOS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case ActionTypes.GET_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case ActionTypes.DELETE_TODOS:
            return {
                ...state,
                data: state.data.filter((todo: Todo) => todo.id !== action.payload)
            };
        default:
            return state;
    }
};
