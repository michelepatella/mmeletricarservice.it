import React, {useRef} from "react";
import {NOSTRI_VALORI_SUBTITLE, NOSTRI_VALORI_TITLE} from "../../utils/constants";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CustomSectionContainer from "../../components/custom/CustomSectionContainer";
import CustomImageContainer from "../../components/custom/CustomImageContainer";
import CustomText from "../../components/custom/CustomText";

/**
 * "Nostri valori" section
 * @returns {Element}
 * @constructor
 */
function NostriValori() {

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    useIntersectionObserver(subtitleRef);
    useIntersectionObserver(imageRef);

    return (

        <>
            <CustomSectionContainer id="nostri-valori">

                {/* Title */}
                <CustomText
                    type="title"
                    text={NOSTRI_VALORI_TITLE} />

                {/* Subtitle */}
                <CustomText
                    type="subtitle"
                    text={NOSTRI_VALORI_SUBTITLE} />

                {/* "Nostri Valori" image */}
                <CustomImageContainer src="/images/nostri-valori-image.jpg"/>

            </CustomSectionContainer>
        </>

    );
}

export default NostriValori;