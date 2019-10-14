import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false
    };

    onLabelClick = () => {
        this.setState({
            done: true
        })
    };

    onMarkImportant = () => {
        this.setState({
            important: true
        })
    };

    render() {

        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';

        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }
        return (
            <div className={classNames}>
                <span
                    className="todo-list-item-label flex-grow-1"
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>
                <div className="btn-wrap">
                    <button type="button"
                            className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={this.onMarkImportant}
                    >
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}
