import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

    render () {
        return (
            <form className="item-add-form">
                <input type="text" placeholder="Input name task"/>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded('Hello')}
                >Add task</button>
            </form>

        )
    }

}

