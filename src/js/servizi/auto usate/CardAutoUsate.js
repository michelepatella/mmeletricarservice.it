import {Flex} from "antd";
import React from "react";
import '../../../css/servizi/auto usate/CardAutoUsate.css';

/**
 * This component represents the informative card of auto usate section
 * @param description
 * @returns {Element}
 * @constructor
 */
function CardAutoUsate({description}) {
    return (
        <div className="cardAutoUsate">
            <Flex gap="small" align="start" horizontal className="card-auto-usate-container">
                <p className="card-auto-usate-description">100%</p>
                <p className="card-auto-usate-description">{description}</p>
            </Flex>
        </div>
    )
}

export default CardAutoUsate;