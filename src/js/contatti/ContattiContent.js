import React, {useRef} from "react";
import {CONTATTI_TITLE, CONTATTI_SUBTITLE, CONTATTI} from "../utility/constants";
import '../../css/contatti/ContattiContent.css';
import CustomButton from "../utility/CustomButton";
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component contains the contatti content
 * @returns {Element}
 * @constructor
 */
function ContattiContent(props) {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useIntersectionObserver(titleRef);
    useIntersectionObserver(subtitleRef);

    return (
        <div className="title-contatti-container">

            {/* Title */}
            <h1 className="contatti-title" dangerouslySetInnerHTML={{__html: CONTATTI_TITLE}} ref={titleRef}/>

            {/* Subtitle */}
            <p className="contatti-description" dangerouslySetInnerHTML={{__html: CONTATTI_SUBTITLE}} ref={subtitleRef}/>

            <div className="contact-buttons-container">
                {/* Add a button for each contact */}
                {CONTATTI.map((contatto, index) => (
                    <CustomButton
                        key={index}
                        value={contatto.value}
                        icon={contatto.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default ContattiContent;