import React from 'react';

const List = ({title, children}  ) => {
    return (
        <div>
            <p> {title} </p>
            {children}
        </div>
    );
};

export default List;