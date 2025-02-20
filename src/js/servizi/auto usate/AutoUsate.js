import '../../../styles/servizi/auto usate/AutoUsate.css';
import React, { useRef } from "react";
import {
    AUTO_USATE_TITLE,
    AUTO_USATE_DESCRIPTION,
    CARD_AUTO_USATE,
    FACEBOOK_LINK_AUTO_USATE
} from "../../utility/constants";
import DivAutoUsate from "./DivAutoUsate";
import {Row} from "antd";
import CustomButton from "../../utility/CustomButton";
import useIntersectionObserver from "../../utility/useIntersectionObserver";

/**
 * This component contains the auto usate section
 * @returns {Element}
 * @constructor
 */
function AutoUsate() {

    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <div id="auto-usate" className="auto-usate-container">
            {/* Title */}
            <h2 className="auto-usate-title">{AUTO_USATE_TITLE}</h2>

            {/* Description */}
            <p ref={subtitleRef} className="auto-usate-subtitle">{AUTO_USATE_DESCRIPTION}</p>

            <Row className="custom-statistic-grid" align="center">
                {/* Add a card division for each informative card */}
                {CARD_AUTO_USATE.map((cardAutoUsate, index) => (
                    <DivAutoUsate
                        key={index}
                        description={cardAutoUsate.description}
                    />
                ))}
            </Row>

            {/* Facebook link */}
            <CustomButton
                value={FACEBOOK_LINK_AUTO_USATE}
                icon='/icons/facebookIconBlack.svg'/>

        </div>
    );
}

export default AutoUsate;