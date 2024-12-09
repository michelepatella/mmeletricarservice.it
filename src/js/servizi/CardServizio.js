import '../../css/servizi/CardServizio.css';
import React from "react";

/**
 * This component define the structure of each card inserted into the Altri servizi section
 * @param title
 * @param description
 * @param color
 * @param borderColor
 * @returns {Element}
 * @constructor
 */
function CardServizio({ title, description, color, borderColor, icon}){
    return (
        <div className="cardServizio"
             style={{backgroundColor: color, borderColor: borderColor, borderWidth: '4px', borderStyle: 'solid'}}>
            <img className="cardIcon" src={icon}/>
            <p className="p-title">{title}</p>
            <p className="p-description">{description}</p>
        </div>
    );
}

export default CardServizio;