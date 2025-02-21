import React, {useRef} from "react";
import {HOME_TITLE, HOME_SUBTITLE} from "../../utility/constants";
import '../../../styles/components/home/HomeContent.css';
import '../../../styles/components/utility/Image.css';
import '../../../styles/variables/imageVariables.css';
import useIntersectionObserver from "../../utility/useIntersectionObserver";

/**
 * This component represents the content of "home" page
 * @returns {Element}
 * @constructor
 */
function HomeContent() {

    //IntersectionObserver to generate the animation when the section is visible
    const imageRef = useRef(null);
    useIntersectionObserver(imageRef);

    return (
        <>
            {/* Global container */}
            <div className="title-home-container">

                {/* Title */}
                <h1 className="home-title" dangerouslySetInnerHTML={{__html: HOME_TITLE}}/>

                {/* Description */}
                <p className="home-description" dangerouslySetInnerHTML={{__html: HOME_SUBTITLE}}/>

            </div>

            {/* Image container */}
            <div className="image-container">
                <img src="/images/home-image.jpg" ref={imageRef}/>
            </div>
        </>
)
    ;
}

export default HomeContent;