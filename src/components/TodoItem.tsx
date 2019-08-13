import React, { memo } from 'react';

import { Todo } from '../actions';

export const TodoItem = memo(
    ({ id, title, completed }: Todo) => {
        return (
            <li>
                {id} - {title}
            </li>
        );
    },
    (currProps, nextProps): boolean => {
        return currProps.id === nextProps.id;
    }
);
