import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Todo, getTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import { TodoItem } from '../components';

interface Props {
    todos: Todo[];
    loading: boolean;
    error: any;
    getTodos: Function;
    deleteTodo: typeof deleteTodo;
}

const _Todos = ({ todos, loading, error, getTodos, deleteTodo }: Props) => {
    useEffect(() => {
        getTodos();
    }, [getTodos]);

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
    (state: StoreState): { todos: Todo[]; loading: boolean; error: any } => ({
        todos: state.todos.data,
        loading: state.todos.loading,
        error: state.todos.error
    }),
    { getTodos, deleteTodo }
)(_Todos);
