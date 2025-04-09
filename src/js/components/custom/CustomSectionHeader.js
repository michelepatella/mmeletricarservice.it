import CustomText from "./CustomText";
import React, {useRef} from "react";
import {
    handleCustomSectionHeaderDescriptionStyle,
    handleCustomSectionHeaderSectionNameStyle
} from "../../logic/styleHandler";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {useVideoAnimation} from "../../hooks/useVideoAnimation";

/**
 * Custom Section Header
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomSectionHeader(props) {

    //IntersectionObserver to generate the animation and
    //start the video when the section is visible
    const videoRef = useRef(null);
    const isVideoVisible= useIntersectionObserver(videoRef);
    useVideoAnimation(videoRef, isVideoVisible);

    return (

        <div className="custom-section-header">

            {/* Section title */}
            <CustomText
                type="description"
                text={'• ' + props.section}
                style={handleCustomSectionHeaderSectionNameStyle()} />

            {/* Title */}
            <CustomText
                type="title"
                text={props.title}
                style={{textAlign: "center"}}/>

            {/* Subtitle */}
            <CustomText
                type="subtitle"
                text={props.subtitle}
                style={handleCustomSectionHeaderDescriptionStyle(props.video)} />

            {/* Video (if any) */}
            {
                props.video ?

                    <video
                        className="video-animation"
                        ref={videoRef}
                        src={props.video}
                        type="video/mp4"
                        loop={false}
                        controls={false}
                        muted
                        playsInline/>

                    : null
            }

        </div>


    );
}

export default CustomSectionHeader;