import React, {useRef} from "react";
import {HOME_TITLE, HOME_SUBTITLE} from "../utility/constants";
import '../../styles/home/HomeContent.css';
import '../../styles/other/Image.css';
import '../../styles/variables/imageVariables.css';
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component contains the home content
 * @returns {Element}
 * @constructor
 */
function HomeContent() {

    const imageRef = useRef(null);
    useIntersectionObserver(imageRef);

    return (
        <>
        <div className="title-container">

            {/* Title */}
            <h1 className="home-title" dangerouslySetInnerHTML={{__html: HOME_TITLE}}/>

            {/* Subtitle */}
            <p className="home-description" dangerouslySetInnerHTML={{__html: HOME_SUBTITLE}}/>

        </div>

        <div className="image-container">
            <img src="/images/home-image.jpg" ref={imageRef}/>
        </div>

        </>
)
    ;
}

export default HomeContent;