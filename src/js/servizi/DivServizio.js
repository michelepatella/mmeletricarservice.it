import '../../css/servizi/DivServizio.css';
import React, {useRef} from "react";
import {Flex} from "antd";
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component define the structure of each division inserted into the Altri servizi section
 * @param title
 * @param description
 * @returns {Element}
 * @constructor
 */
function DivServizio({ title, description, icon}){

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useIntersectionObserver(titleRef);
    useIntersectionObserver(subtitleRef);

    return (
        <div className="divServizio">
            <Flex gap="small" align="start" vertical className="title-and-icon-container">
                <Flex className="flex-division">
                    <p className="title-servizio" ref={titleRef}>{title}</p>
                    <img className="servizio-icon" src={icon}/>
                </Flex>
            </Flex>
            <p className="description-servizio" ref={subtitleRef}>{description}</p>
        </div>
    );
}

export default DivServizio;