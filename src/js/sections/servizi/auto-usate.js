import React, { useRef } from "react";
import { Row } from "antd";
import {
    AUTO_USATE_TITLE,
    AUTO_USATE_DESCRIPTION,
    AUTO_USATE_STATS,
    FACEBOOK_LINK_AUTO_USATE
} from "../../utils/constants";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import DivAutoUsate from "../../components/servizi/DivAutoUsate";
import CustomButton from "../../components/custom/CustomButton";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import '../../../styles/sections/auto-usate.css';

/**
 * "Auto usate" section
 * @returns {Element}
 * @constructor
 */
function AutoUsate() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (

        <>
            <CustomSectionContainer id="auto-usate">

                {/* Title */}
                <CustomText
                    type="title"
                    text={AUTO_USATE_TITLE}/>

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={AUTO_USATE_DESCRIPTION}/>

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

            </CustomSectionContainer>
        </>

    );
}

export default AutoUsate;