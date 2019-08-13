import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Todo, getTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import { TodoItem } from '../components';

interface Props {
    todos: Todo[];
    getTodos: Function;
    deleteTodo: typeof deleteTodo;
}

const _Todos = ({ todos, getTodos, deleteTodo }: Props) => {
    useEffect(() => {
        getTodos();
    }, [getTodos]);

    return (
        <div className="todos">
            <ul>
                {todos.map(todo => (
                    <div onClick={() => deleteTodo(todo.id)}>
                        <TodoItem key={todo.id} {...todo} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export const Todos = connect(
    ({ todos }: StoreState): { todos: Todo[] } => ({
        todos
    }),
    { getTodos, deleteTodo }
)(_Todos);
