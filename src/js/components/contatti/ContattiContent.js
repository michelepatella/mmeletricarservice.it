import '../../../styles/components/contatti/ContattiContent.css';
import React, {useRef} from "react";
import CustomButton from "../CustomButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {CONTATTI_TITLE, CONTATTI_SUBTITLE, CONTATTI} from "../../utils/constants";

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
                <h1
                    className="contatti-title"
                    dangerouslySetInnerHTML={{__html: CONTATTI_TITLE}}/>

                {/* Description */}
                <p
                    className="contatti-description"
                    dangerouslySetInnerHTML={{__html: CONTATTI_SUBTITLE}}
                    ref={subtitleRef}/>

                {/* Contact buttons container */}
                <div className="contact-buttons-container">

                    {/* Add a button for each contact */}
                    {CONTATTI.map((contact, index) => (
                        <CustomButton
                            key={index}
                            value={contact.value}
                            icon={contact.icon}
                        />
                    ))}

                </div>
            </div>
        </>
    );
}

export default ContattiContent;