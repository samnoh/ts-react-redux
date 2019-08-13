import React from 'react';
import { Todo } from '../actions';

export const TodoItem = ({ id, title, completed }: Todo) => {
    return (
        <li>
            {id} - {title}
        </li>
    );
};
