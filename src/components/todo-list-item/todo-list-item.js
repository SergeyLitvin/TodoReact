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

    render() {

        const {label, important = false} = this.props;
        const {done} = this.state;

        const style = {
            color: important ? 'tomato' : 'black'
        };

        let classNames = 'todo-list-item ';

        if(done) {
            classNames += 'done';
        }
        return (
            <div className={classNames}>
                <span
                    className="todo-list-item-label flex-grow-1"
                    style={style}
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
                            className="btn btn-outline-success btn-sm">
                        <i className="fa fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}
