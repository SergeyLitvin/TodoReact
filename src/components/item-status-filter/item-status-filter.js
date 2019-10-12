import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component  {

    render() {
        return (
            <div className="btn-group">
                <div className="btn btn-info">All</div>
                <div className="btn btn-outline-secondary">Active</div>
                <div className="btn btn-outline-secondary">Done</div>
            </div>
        )
    }

}