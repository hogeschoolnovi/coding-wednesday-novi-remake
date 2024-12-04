import React from 'react';
import './InformationCard.css';
import {ArrowRight} from "@phosphor-icons/react";

const InformationCard = ({infoCardTitle, infoCardContent, experienceNeeded, onClick}) => {
    return (
        <div className="infoCard">
            <h3 className="info-card-title">{infoCardTitle}</h3>
            <p className="info-card-content">{infoCardContent}</p>
            {experienceNeeded && <p className="info-card-experience-tag"><em>Enige IT-ervaring vereist</em></p>}
            <button
                type="button"
                onClick={onClick}
                className="arrow-button"
            >
                <ArrowRight size={20} />
            </button>
        </div>
    );
};

export default InformationCard;