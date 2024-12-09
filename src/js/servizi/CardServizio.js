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
function CardServizio({ title, description, color, borderColor }){
    return (
        <div className="cardServizio"
             style={{backgroundColor: color, borderColor: borderColor, borderWidth: '4px', borderStyle: 'solid'}}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
export default CardServizio;