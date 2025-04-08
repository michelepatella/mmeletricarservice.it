import React from "react";
import { HOME_TITLE, HOME_SUBTITLE } from "../../utils/const";
import '../../../styles/components/home/HomeContent.css';

/**
 * Content of Home section
 * @returns {Element}
 * @constructor
 */
function HomeContent() {
    return (
        <>
            <div id="/home">

                {/* Title */}
                <h1
                    className="home-title"
                    dangerouslySetInnerHTML={{__html: HOME_TITLE}} />

                {/* Subtitle */}
                <p
                    className="home-subtitle"
                    dangerouslySetInnerHTML={{__html: HOME_SUBTITLE}} />

            </div>
        </>
    );
}

export default HomeContent;