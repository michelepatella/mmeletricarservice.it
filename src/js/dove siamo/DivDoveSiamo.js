import '../../styles/dove siamo/DoveSiamoDivision.css';
import React, {useRef} from "react";
import {Flex} from "antd";
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component define the structure of each division inserted into the Dove siamo section
 * @param title
 * @param description
 * @returns {Element}
 * @constructor
 */
function DivDoveSiamo({ title, description, icon}){

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    useIntersectionObserver(titleRef);
    useIntersectionObserver(subtitleRef);

    return (
        <div className="divDoveSiamo">
            <Flex gap="small" align="start" vertical className="title-and-icon-container-dove-siamo">
                <Flex className="flex-division-dove-siamo">
                    <p className="dove-siamo-division-title" ref={titleRef}>{title}</p>
                    <img className="dove-siamo-division-icon" src={icon} alt="dove-siamo-icon"/>
                </Flex>
            </Flex>
            <p className="dove-siamo-division-description" ref={subtitleRef} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}

export default DivDoveSiamo;