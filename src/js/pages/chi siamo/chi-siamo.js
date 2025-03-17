import '../../../styles/pages/chi-siamo.css';
import '../../../styles/components/utility/Image.css';
import '../../../styles/variables/imageVariables.css';
import React, {useRef} from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { CHI_SIAMO_DESCRIPTION } from "../../utils/constants";
import {useVideoAnimation} from "../../hooks/useVideoAnimation";

/**
 * That's the "chi siamo" page
 * @returns {Element}
 * @constructor
 */
function ChiSiamo() {

    //IntersectionObserver to generate the animation and
    //start the video when the section is visible
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);
    const isVideoVisible= useIntersectionObserver(imageRef);
    useIntersectionObserver(subtitleRef);
    useVideoAnimation(videoRef, isVideoVisible);

    return (
        <>
            {/* Title and description division */}
            <div
                id="chi-siamo"
                className="chi-siamo-container">

                {/* Video container */}
                <div
                    className="image-container"
                    ref={imageRef}
                    style={{
                        marginBottom: '50px'
                    }}>

                    {/*Logo animation video*/}
                    <video
                        src="/images/animation-logo.mp4"
                        ref={videoRef}
                        type="video/mp4"
                        className="logo-animation"
                        loop={false}
                        muted
                        playsInline
                        controls={false}
                    />

                </div>

                {/*Description*/}
                <p
                    ref={subtitleRef}
                    className="chi-siamo-subtitle"
                    dangerouslySetInnerHTML={{ __html: CHI_SIAMO_DESCRIPTION }} />

            </div>

        </>
    );
}

export default ChiSiamo;