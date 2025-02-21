import '../../styles/components/DoveSiamoDivision.css';
import React, {useRef} from "react";
import {Flex} from "antd";
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component represents the division of the "dove siamo" section, used to describe information about the location
 * @param title
 * @param description
 * @param icon
 * @returns {Element}
 * @constructor
 */
function DivDoveSiamo({ title, description, icon}){

    //IntersectionObserver to generate the animation when the section is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (

        <>
            {/* Global division */}
            <div className="divDoveSiamo">

                {/* Title and icon container */}
                <Flex gap="small" align="start" vertical className="title-and-icon-container-dove-siamo">
                    <Flex className="flex-division-dove-siamo">
                        <p className="dove-siamo-division-title">{title}</p>
                        <img className="dove-siamo-division-icon" src={icon} alt="dove-siamo-icon"/>
                    </Flex>
                </Flex>

                {/* Description */}
                <p className="dove-siamo-division-description" ref={subtitleRef} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </>
    );
}

export default DivDoveSiamo;