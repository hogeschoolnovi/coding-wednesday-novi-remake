import React from 'react';

const List = ({title, children, classname}  ) => {
    return (
        <div className={classname}>
            <h3> {title} </h3>
            {children}
        </div>
    );
};

export default List;