const InputField = ({type, placeholder, name}) => {
    return (
        <>
            {/*<label htmlFor={name}>{placeholder}</label>*/}
            <input type={type} placeholder={placeholder} name={name}/>
        </>
    );
};

import React from 'react';

export default InputField;