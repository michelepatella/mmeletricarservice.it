import '../../../styles/components/servizi/DivServizio.css';
import React, {useRef} from "react";
import {Flex} from "antd";
import useIntersectionObserver from "../../utility/useIntersectionObserver";

/**
 * This component represents the division of each service shown in the "altri servizi" page
 * @param title
 * @param description
 * @param icon
 * @returns {Element}
 * @constructor
 */
function DivServizio({ title, description, icon}){

    //IntersectionObserver to generate the animation when the division is visible
    const subtitleRef = useRef(null);
    useIntersectionObserver(subtitleRef);

    return (
        <>
            {/* Global division */}
            <div className="divServizio">

                {/* Title and icon container*/}
                <Flex gap="small" align="start" vertical className="title-and-icon-container">
                    <Flex className="flex-division">
                        <p className="title-servizio">{title}</p>
                        <img className="servizio-icon" src={icon} alt="servizio-icon"/>
                    </Flex>
                </Flex>

                {/* Service's description */}
                <p className="description-servizio" ref={subtitleRef}>{description}</p>
            </div>
        </>
    );
}

export default DivServizio;