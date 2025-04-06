import React, { useRef } from "react";
import { Row } from "antd";
import {
    USED_CARS_TITLE,
    USED_CARS_DESCRIPTION,
    USED_CARS_STATS,
    FACEBOOK_LINK_USED_CARS
} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import DivAutoUsate from "../../components/services/DivAutoUsate";
import CustomButton from "../../components/custom/CustomButton";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import '../../../styles/sections/used-cards.css';

/**
 * Used cars section
 * @returns {Element}
 * @constructor
 */
function UsedCars() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (

        <>
            <CustomSectionContainer id="used-cars">

                {/* Title */}
                <CustomText
                    type="title"
                    text={USED_CARS_TITLE} />

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={USED_CARS_DESCRIPTION} />

                {/* Global division of the statistic divisions */}
                <Row
                    className="custom-statistic-grid"
                    align="center">

                    {/* Add a division for each statistic*/}
                    {USED_CARS_STATS.map((cardAutoUsate, index) => (
                        <DivAutoUsate
                            key={index}
                            description={cardAutoUsate.description}
                        />
                    ))}

                </Row>

                {/* Facebook button link */}
                <CustomButton
                    type={FACEBOOK_LINK_USED_CARS}
                    value={FACEBOOK_LINK_USED_CARS}
                    icon='/icons/facebook_icon.svg' />

            </CustomSectionContainer>
        </>

    );
}

export default UsedCars;