import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        searchText: ''
    };

    onInputChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
        this.props.onSearch(e.target.value);
    };

    // filterTodos = (searchText) => {
    //     console.log(searchText);
    // };


    render() {
        return (
            <input
                type="text"
                placeholder="Search task..."
                className="search-input"
                onChange={this.onInputChange}
                value={this.state.searchText}
            />
        )
    }
};
