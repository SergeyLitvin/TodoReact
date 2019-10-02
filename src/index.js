import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {label: 'Drink green tea.', important: false},
        {label: 'Make awesome todo-react app', important: true},
        {label: 'Take a walk on nature.', important: false}
    ];

    return (
        <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos={todoData}/>
        </div>
    )
};

ReactDom.render( <App /> , document.getElementById('root'));
