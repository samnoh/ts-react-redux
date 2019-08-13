import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Todo, getTodos } from '../actions';
import { StoreState } from '../reducers';
import { TodoItem } from '../components';

interface Props {
    todos: Todo[];
    getTodos(): any;
}

const _Todos = ({ todos, getTodos }: Props) => {
    useEffect(() => {
        getTodos();
    }, [getTodos]);

    return (
        <div className="todos">
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    );
};

export const Todos = connect(
    ({ todos }: StoreState): { todos: Todo[] } => ({
        todos
    }),
    { getTodos }
)(_Todos);
