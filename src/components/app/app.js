import React, {Component} from 'react';
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

import './app.css';


export default class App extends Component {
    startId = 0;

    state = {
        todoData: [
            this.createTodoItem('Drink green tea'),
            this.createTodoItem('Make awesome todo-react app'),
            this.createTodoItem('Take a walk on nature.')
        ]
    };

    createTodoItem(text) {
        return {
            id: this.startId++,
            label: text,
            important: false,
            done: false
        }
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {

        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            return {
                todoData: [...todoData, newItem]
            }
        })
    };

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)];
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    };

    filteringFoundTasks = (searchText) => {
        console.log(searchText);
    };

    render() {

        const { todoData } = this.state;

        const doneCount = todoData.filter((el) => el.done).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className="container">

                <AppHeader toDo={todoCount} done={doneCount}/>

                <div className="search-panel-wrap">
                    <SearchPanel onSearch={this.filteringFoundTasks}/>
                    <ItemStatusFilter/>
                </div>

                <ItemAddForm onItemAdded={this.addItem}/>

                <TodoList
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

            </div>
        )
    }

};
