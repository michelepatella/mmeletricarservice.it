import React, { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import '../../../styles/components/custom/CustomImageContainer.css';

/**
 * Custom Image Container
 * @param props
 * @returns {Element}
 * @constructor
 */
function CustomImageContainer(props){

    //IntersectionObserver to generate the animation when the section is visible
    const imageRef = useRef(null);
    useIntersectionObserver(imageRef);

    return (

        <div className="image-container">
            <img
                src={props.src}
                ref={imageRef}/>
        </div>

    );
}

export default CustomImageContainer;