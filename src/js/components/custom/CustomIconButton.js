import React from "react";
import '../../../styles/variables.css';
import '../../../styles/components/custom/CustomIconButton.css';

/**
 * Custom Icon Button
 * @param props
 * @returns {Element}
 * @constructor
 */
function CustomIconButton(props) {
    return (

        <button
            className="custom-icon-button"
            onClick={props.onClick}>

            {/* Icon */}
            <img
                src={props.src}
                alt={props.alt} />

        </button>

    );
}

export default CustomIconButton;