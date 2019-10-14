import React, {Component} from 'react';
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

import './app.css';


export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            {id: 1, label: 'Drink green tea.', important: false},
            {
                id: 2,
                label: 'Make awesome todo-react app',
                important: true
            },
            {id: 3, label: 'Take a walk on nature.', important: false}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // todoData.splice(idx, 1); // нельзя изменять существующий массив или объект (bad practice react)

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        });
    };

    addItem = () => {

        const newItem = {
            id: this.maxId++,
            label: `Some text`,
            important: false
        };

        this.setState( ( {todoData} ) => {
            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            }
        })
    };

    render() {
        return (
            <div className="container">
                <AppHeader/>
                <div className="search-panel-wrap">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }

};
