import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label:''
        })
    };

    render () {
        return (
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    onChange={this.onLabelChange}
                    placeholder="Input name task"
                    value={this.state.label}/>
                <button
                    className="btn btn-outline-secondary"
                >Add task</button>
            </form>
        )
    }

}

