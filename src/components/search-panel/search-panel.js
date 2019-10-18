import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        searchText: ''
    };

    onInputChange = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText });
        this.props.onSearchChange(searchText);
    };

    render() {
        return (
            <input
                type="text"
                placeholder="Search todo..."
                className="search-input"
                onChange={ this.onInputChange }
                value={ this.state.searchText }
            />
        )
    }
};
