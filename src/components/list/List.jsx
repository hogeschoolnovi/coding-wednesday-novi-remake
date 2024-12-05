// Update List.jsx
import React from 'react';
import "./List.css";
import ResourceLinks from '../resourceLinks/ResourceLinks';

const List = ({title, links, variant, children, isHorizontal}) => {
    let className = variant === 'dark' ? 'list-dark' : 'list-light';
    className += isHorizontal ? ' list-horizontal' : ' list-vertical';
    return (
        <div className={className}>
            <h3>{title}</h3>
            {links && links.map((link, index) => (
                <ResourceLinks
                    key={index}
                    url={link.url}
                    label={link.label}
                    icon={link.icon}
                    iconAlt={link.iconAlt}
                    target={link.isIconOnly ? "_blank" : "_self"}
                    isOnlyIcon={!!link.icon}
                    className={link.className}
                />
            ))}
            {children}
        </div>
    );
};
export default List;