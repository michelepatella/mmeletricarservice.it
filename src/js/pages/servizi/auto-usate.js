import '../../../styles/pages/auto-usate.css';
import React, { useRef } from "react";
import {Row} from "antd";
import DivAutoUsate from "../../components/servizi/DivAutoUsate";
import CustomButton from "../../components/CustomButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {
    AUTO_USATE_TITLE,
    AUTO_USATE_DESCRIPTION,
    AUTO_USATE_STATS,
    FACEBOOK_LINK_AUTO_USATE
} from "../../utils/constants";

/**
 * That's the "servizi" page
 * @returns {Element}
 * @constructor
 */
function AutoUsate() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <>
            {/* Global division */}
            <div
                id="auto-usate"
                className="auto-usate-container">

                {/* Title */}
                <h2 className="auto-usate-title">
                    {AUTO_USATE_TITLE}
                </h2>

                {/* Description */}
                <p
                    ref={subtitleRef}
                    className="auto-usate-subtitle">
                    {AUTO_USATE_DESCRIPTION}
                </p>

                {/* Global division of the statistic divisions */}
                <Row
                    className="custom-statistic-grid"
                    align="center">

                    {/* Add a division for each statistic*/}
                    {AUTO_USATE_STATS.map((cardAutoUsate, index) => (
                        <DivAutoUsate
                            key={index}
                            description={cardAutoUsate.description}
                        />
                    ))}

                </Row>

                {/* Facebook button link */}
                <CustomButton
                    value={FACEBOOK_LINK_AUTO_USATE}
                    icon='/icons/facebookIconBlack.svg'/>
            </div>
        </>
    );
}

export default AutoUsate;