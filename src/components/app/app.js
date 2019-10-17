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
            this.createTodoItem('Drink green tea'),
            this.createTodoItem('Make awesome todo-react app'),
            this.createTodoItem('Take a walk on nature.')
        ]
    };

    createTodoItem(text) {
        return {
            id: this.maxId++,
            label: text,
            important: false,
            done: false
        }
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

    addItem = (text) => {

        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            }
        })
    };

    onToggleImportant = (id) => {
        console.log('Toggle Important:', id);
    };

    onToggleDone = (id) => {
        console.log('Toggle Done:', id);
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
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }

};
