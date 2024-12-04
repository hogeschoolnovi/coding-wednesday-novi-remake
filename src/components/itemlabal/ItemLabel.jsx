import React from 'react';
import './ItemLabel.css'

const ItemLabel = ({title, text}) => {
    return (
        <>
            <article className='article'>
                <h2 className='h2'>{title}</h2>

                <p className='p'>{text}</p>

            </article>
        </>
    );
};

export default ItemLabel;