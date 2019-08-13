import React from 'react';
import { Todo } from '../actions';

interface Props {}

export const TodoView = ({ id, title, completed }: Todo) => {
    return (
        <li>
            {id} - {title}
        </li>
    );
};
