import React from "react";
import CustomImageContainer from "../custom/CustomImageContainer";
import CustomSectionContainer from "../custom/CustomSectionContainer";
import { HOME_TITLE, HOME_SUBTITLE } from "../../utils/constants";
import '../../../styles/components/home/HomeContent.css';

/**
 * Content of "Home" section
 * @returns {Element}
 * @constructor
 */
function HomeContent() {
    return (
        <>

            <CustomSectionContainer id="/">

                {/* Title */}
                <h1
                    className="home-title"
                    dangerouslySetInnerHTML={{__html: HOME_TITLE}}/>

                {/* Subtitle */}
                <p
                    className="home-subtitle"
                    dangerouslySetInnerHTML={{__html: HOME_SUBTITLE}}/>

                {/* "Home" image */}
                <CustomImageContainer src="/images/home-image.jpg"/>

            </CustomSectionContainer>

        </>
    );
}

export default HomeContent;