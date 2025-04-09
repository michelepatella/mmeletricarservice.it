import React, {useRef, useState} from "react";
import {
    USED_CARS_TITLE,
    USED_CARS_DESCRIPTION,
} from "../../utils/const";
import {useUsedCarsOverview} from "../../hooks/useUsedCarsOverview";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomText from "../../components/custom/CustomText";
import CustomUsedCarCard from "../../components/custom/CustomUsedCarCard";

/**
 * Used cars section
 * @returns {Element}
 * @constructor
 */
function UsedCars() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    //get used cars overview information
    const [usedCars, setUsedCars] = useState([]);
    useUsedCarsOverview(setUsedCars)

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

                {/* Used Car Card for all the available cars */}
                {
                    usedCars.length > 0 ?
                        usedCars.map((car) => (
                                <CustomUsedCarCard car={car} />
                        ))

                        : null
                }


            </CustomSectionContainer>
        </>

    );
}

export default UsedCars;