import React, { useEffect } from 'react';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { Todo, getTodos, deleteTodo, IAppState } from '../actions';
import { TodoItem } from '../components';

interface IProps {
    todos: Todo[];
    loading: boolean;
    error: any;
    getTodos: () => Promise<void>;
    deleteTodo: typeof deleteTodo;
}

const _Todos = ({ todos, loading, error, getTodos, deleteTodo }: IProps) => {
    useEffect(() => {
        getTodos();
    }, []);

    if (loading) return <h1>'loading...'</h1>;

    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div className="todos">
            <ul>
                {todos.map(todo => (
                    <div key={todo.id} onClick={() => deleteTodo(todo.id)}>
                        <TodoItem {...todo} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export const Todos = connect(
    (store: IAppState) => ({
        todos: store.todos.data,
        loading: store.todos.loading,
        error: store.todos.error
    }),
    (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        return {
            getTodos: () => dispatch(getTodos()),
            deleteTodo: (id: number) => dispatch(deleteTodo(id))
        };
    }
)(_Todos);
