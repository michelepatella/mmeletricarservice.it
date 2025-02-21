import React, {useRef} from "react";
import {CONTATTI_TITLE, CONTATTI_SUBTITLE, CONTATTI} from "../../utility/constants";
import '../../../styles/components/contatti/ContattiContent.css';
import CustomButton from "../CustomButton";
import useIntersectionObserver from "../../utility/useIntersectionObserver";

/**
 * This component represents the content of "contatti" page
 * @param props
 * @returns {Element}
 * @constructor
 */
function ContattiContent(props) {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <>
            {/* Global container */}
            <div className="title-contatti-container">

                {/* Title */}
                <h1 className="contatti-title" dangerouslySetInnerHTML={{__html: CONTATTI_TITLE}}/>

                {/* Description */}
                <p className="contatti-description" dangerouslySetInnerHTML={{__html: CONTATTI_SUBTITLE}} ref={subtitleRef}/>

                {/* Contact buttons container */}
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
        </>
    );
}

export default ContattiContent;