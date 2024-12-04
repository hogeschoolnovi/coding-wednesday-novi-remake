import React from 'react';
import "./ResourceLinks.css"
const ResourceLinks = ({icon, icon_alt, target, url, icon_only, name, classname}) => {
    return (
        <div>
            <a href={url} target={target}>
            {icon_only && icon &&
                <img className={classname} src={icon} alt={icon_alt}/>
            }
            {!icon_only &&
                name}
            </a>

        </div>
    );
}

export default ResourceLinks;