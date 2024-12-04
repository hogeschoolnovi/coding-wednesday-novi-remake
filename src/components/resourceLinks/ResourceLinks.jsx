import React from 'react';

const ResourceLinks = ({icon, icon_alt, target, url, icon_only}) => {
    return (
        <div>

            {icon || icon_only &&
            <img src={icon} alt={icon_alt}/>
            }
            {!icon_only &&
            <a href={url} target={target}>Privacy</a>
            }
        </div>
    );
};

export default ResourceLinks;