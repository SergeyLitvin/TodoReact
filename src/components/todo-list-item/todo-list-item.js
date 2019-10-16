import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({
        label,
        onDeleted,
        onToggleImportant,
        onToggleDone,
        important,
        done
    }) => {

    let classNames = 'todo-list-item';

    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }
    return (
        <div className={classNames}>
                <span
                    className="todo-list-item-label flex-grow-1"
                    onClick={onToggleDone}
                >
                    {label}
                </span>
            <div className="btn-wrap">
                <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDeleted}
                >
                    <i className="fa fa-trash"></i>
                </button>
                <button type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
            </div>
        </div>
    );

};

export default TodoListItem;
