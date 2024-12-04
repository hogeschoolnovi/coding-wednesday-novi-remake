import React from 'react';
import './ItemLabel.css'

const ItemLabel = ({title, text}) => {
    return (
        <article className="item-label-container">
                <h2 className="item-label-title">{title}</h2>
                <p className="item-label-text">{text}</p>
            </article>
           );
};

export default ItemLabel;