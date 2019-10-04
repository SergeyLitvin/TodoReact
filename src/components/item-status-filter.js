import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {
    return (
        <div className="btn-group">
            <div className="btn btn-info">All</div>
            <div className="btn btn-outline-secondary">Active</div>
            <div className="btn btn-outline-secondary">Done</div>
        </div>
    )
};

export default ItemStatusFilter;