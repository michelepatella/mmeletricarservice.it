import React from "react";
import {HOME_TITLE, HOME_SUBTITLE} from "../constants";
import '../../css/home/HomeContent.css';

/**
 * This component contains the home content
 * @returns {Element}
 * @constructor
 */
function HomeContent() {

    return (
        <div className="title-container">

            {/* Title */}
            <h1 className="home-title" dangerouslySetInnerHTML={{__html: HOME_TITLE}}/>

            {/* Subtitle */}
            <p className="home-description" dangerouslySetInnerHTML={{__html: HOME_SUBTITLE}}/>

        </div>
    );
}

export default HomeContent;