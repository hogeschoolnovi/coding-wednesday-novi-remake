// Update ResourceLinks.jsx
import React from 'react';
import "./ResourceLinks.css";

const ResourceLinks = ({icon, target, url, isOnlyIcon, label, className}) => {
    return (
        <a className={className + " resource-link"} href={url} target={target}>
            {isOnlyIcon && icon}
            {!!isOnlyIcon && label}
            {!isOnlyIcon && label}
        </a>
    );
}

export default ResourceLinks;