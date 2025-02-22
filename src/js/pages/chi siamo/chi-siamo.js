import '../../../styles/pages/chi-siamo.css';
import React, { useEffect, useRef } from "react";
import { CHI_SIAMO_DESCRIPTION, CHI_SIAMO_TITLE } from "../../utility/constants";
import useIntersectionObserver from "../../utility/useIntersectionObserver";
import '../../../styles/components/utility/Image.css';
import '../../../styles/variables/imageVariables.css';

/**
 * That's the "chi siamo" page
 * @returns {Element}
 * @constructor
 */
function ChiSiamo() {

    //IntersectionObserver to generate the animation and start the video
    //when the section is visible
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    const videoRef = useRef(null);
    useIntersectionObserver(subtitleRef);
    const isVideoVisible= useIntersectionObserver(imageRef);

    /**
     * To delay the logo animation
     */
    useEffect(() => {
        //if the section is visible
        if (isVideoVisible) {
            const timer = setTimeout(() => {
                //start the video
                videoRef.current.play();
            }, 200);  //delay about 0.2s since the section is visible

            return () => clearTimeout(timer);
        }
    }, [isVideoVisible]);

    return (
        <>
            {/* Title and description division */}
            <div id="chi-siamo" className="chi-siamo-container">

                {/* Video container */}
                <div className="image-container" ref={imageRef}
                     style={{marginBottom: '50px'}}>

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
                <p ref={subtitleRef} className="chi-siamo-subtitle"
                   dangerouslySetInnerHTML={{ __html: CHI_SIAMO_DESCRIPTION }} />

            </div>

        </>
    );
}

export default ChiSiamo;