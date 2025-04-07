import React, { useRef } from "react";
import {
    USED_CARS_TITLE,
    USED_CARS_DESCRIPTION,
} from "../../utils/const";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";

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

            </CustomSectionContainer>
        </>

    );
}

export default UsedCars;