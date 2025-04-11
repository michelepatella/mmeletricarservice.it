import React, {useRef} from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import {useVideoAnimation} from "../../hooks/useVideoAnimation";
import {
    handleSectionNameStyle,
    handleSubtitleStyle
} from "../../logic/sectionHeaderStyleHandler";
import CustomText from "../custom/CustomText";

/**
 * Section Header
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function SectionHeader(props) {

    //IntersectionObserver to generate the animation and
    //start the video when the section is visible
    const videoRef = useRef(null);
    const isVideoVisible= useIntersectionObserver(videoRef);
    useVideoAnimation(videoRef, isVideoVisible);

    //to animate the whole header
    const ref = useRef(null);
    useIntersectionObserver(ref);

    return (

        <div
            ref={ref}
            className="section-header">

            {/* Section title */}
            <CustomText
                type="body"
                text={'• ' + props.section}
                style={handleSectionNameStyle()} />

            {/* Title */}
            <CustomText
                type="heading"
                text={props.title}
                style={{textAlign: "center"}}/>

            {/* Subtitle */}
            <CustomText
                type="subheading"
                text={props.subtitle}
                style={handleSubtitleStyle(props.video)} />

            {/* Media (if any) */}
            {
                props.video ?

                    <video
                        className="video"
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

export default SectionHeader;