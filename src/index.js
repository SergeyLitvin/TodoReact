import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {label: 'Drink green tea.', important: false, id: 1},
        {label: 'Make awesome todo-react app', important: true, id: 2},
        {label: 'Take a walk on nature.', important: false, id: 3}
    ];

    return (
        <div className="container">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    )
};

ReactDom.render( <App /> , document.getElementById('root'));
