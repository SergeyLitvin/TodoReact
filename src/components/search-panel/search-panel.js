import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        searchText: ''
    };

    render() {
        return (
            <input type="text" placeholder="Search" className="search-input" />
        )
    }
};
