import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
        <div className="todo-list-item">
            <span
                className="todo-list-item-label flex-grow-1"
                style={style}>
                {label}
            </span>
            <div className="btn-wrap">
                    <button type="button"
                            className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                    <button type="button"
                            className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation"></i>
                    </button>
            </div>
        </div>
    );
};

export default TodoListItem;
