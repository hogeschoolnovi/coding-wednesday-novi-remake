import React from 'react';

const List = ({title, childreng}  ) => {
    return (
        <div>
            <p> {title} </p>
            {children}
        </div>
    );
};

export default List;