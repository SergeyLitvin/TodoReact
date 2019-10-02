import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink Tea"/></li>
            <li><TodoListItem label="Build awesome Todo react app" important/></li>
            <li><TodoListItem label="Take a walk on nature."/></li>
        </ul>
    )
};

export  default TodoList;
