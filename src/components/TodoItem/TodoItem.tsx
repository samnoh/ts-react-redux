import React, { memo } from 'react';

import { Todo } from '../../actions';
import './TodoItem.scss';

export const TodoItem = memo(
    ({ id, title, completed }: Todo) => {
        return (
            <li>
                {id} - {title} {completed ? <span className="tick">&#10003;</span> : ''}
            </li>
        );
    }
    // (currProps, nextProps): boolean => {
    //     return currProps.id === nextProps.id;
    // }
);
