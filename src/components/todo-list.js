import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem /></li>
            <li><TodoListItem /></li>
            <li>Build awesome Todo react app</li>
            <li>Drink green tea</li>
        </ul>
    )
};

export  default TodoList;