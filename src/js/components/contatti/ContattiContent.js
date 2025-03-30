import React, { useRef } from "react";
import { CONTATTI_TITLE, CONTATTI_SUBTITLE, CONTATTI } from "../../utils/constants";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomButton from "../custom/CustomButton";
import CustomSectionContainer from "../custom/CustomSectionContainer";
import CustomText from "../custom/CustomText";
import "../../../styles/components/contatti/ContattiContent.css";

/**
 * Content of "Contatti" section
 * @returns {Element}
 * @constructor
 */
function ContattiContent() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <>
            <CustomSectionContainer id="contatti">

                {/* Title */}
                <CustomText
                    type="title"
                    text={CONTATTI_TITLE}/>

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={CONTATTI_SUBTITLE}/>

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

            </CustomSectionContainer>
        </>
    );
}

export default ContattiContent;