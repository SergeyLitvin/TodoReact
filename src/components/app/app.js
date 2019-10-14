import React from 'react';

import AppHeader from "../app-header/";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import './app.css';


const App = () => {

    const todoData = [
        {id: 1, label: 'Drink green tea.', important: false},
        {id: 2, label: 'Make awesome todo-react app', important: true},
        {id: 3, label: 'Take a walk on nature.', important: false}
    ];

return (
    <div className="container">
        <AppHeader/>
        <div className="search-panel-wrap">
            <SearchPanel/>
            <ItemStatusFilter/>
        </div>

        <TodoList
            todos={todoData}
            onDeleted={ (id) => console.log('Delet ', id)}
        />
    </div>
)};

export default App;
