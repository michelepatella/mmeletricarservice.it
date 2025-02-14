import React from "react";
import {HOME_TITLE, HOME_SUBTITLE} from "../utility/constants";
import '../../css/home/HomeContent.css';
import '../../css/other/Image.css';
import '../../css/variables/imageVariables.css';

/**
 * This component contains the home content
 * @returns {Element}
 * @constructor
 */
function HomeContent() {

    return (

        <>
        <div className="title-container">

            {/* Title */}
            <h1 className="home-title" dangerouslySetInnerHTML={{__html: HOME_TITLE}}/>

            {/* Subtitle */}
            <p className="home-description" dangerouslySetInnerHTML={{__html: HOME_SUBTITLE}}/>

        </div>

        <div className="image-container">
            <img src="/images/home-image.jpeg"/>
        </div>

        </>
)
    ;
}

export default HomeContent;