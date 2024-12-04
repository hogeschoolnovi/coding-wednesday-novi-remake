import React from 'react';

const ResourceLinks = ({icon, icon_alt, target, url, icon_only, name}) => {
    return (
        <div>
            {icon_only && icon &&
                <img src={icon} alt={icon_alt}/>
            }
            {!icon_only &&
                <a href={url} target={target}>{name}</a>
            }
        </div>
    );
};

export default ResourceLinks;