import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Todo, getTodos, deleteTodo } from '../actions';
import { IAppState } from '../reducers';
import { TodoItem } from '../components';

interface IProps {
    todos: Todo[];
    loading: boolean;
    error: any;
    getTodos: () => Promise<void>;
    deleteTodo: typeof deleteTodo;
}

const _TodosContainer = ({ todos, loading, error, getTodos, deleteTodo }: IProps) => {
    useEffect(() => {
        getTodos();
        // eslint-disable-next-line
    }, []);

    if (loading) return <h1>'loading...'</h1>;

    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div className="todos">
            <ul>
                {todos.map(todo => (
                    <div onClick={() => deleteTodo(todo.id)}>
                        <TodoItem {...todo} key={todo.id} />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export const TodosContainer = connect(
    (store: IAppState) => ({
        todos: store.todos.data,
        loading: store.todos.loading,
        error: store.todos.error
    }),
    { getTodos, deleteTodo }
    // (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    //     return {
    //         getTodos: () => dispatch(getTodos()),
    //         deleteTodo: (id: number) => dispatch(deleteTodo(id))
    //     };
    // }
)(_TodosContainer);
