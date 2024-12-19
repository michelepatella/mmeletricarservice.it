import '../../css/dove siamo/DoveSiamoDivision.css';
import React, {useEffect, useRef} from "react";
import {Flex} from "antd";

/**
 * This component define the structure of each division inserted into the Dove siamo section
 * @param title
 * @param description
 * @returns {Element}
 * @constructor
 */
function DoveSiamoDivision({ title, description, icon}){

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const iconRef = useRef(null);

    /**
     * Method to keep track if the section Dove siamo is visible
     * in order to start the animation
     */
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (titleRef.current) observer.observe(titleRef.current);
        if (subtitleRef.current) observer.observe(subtitleRef.current);
        if (iconRef.current) observer.observe(iconRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (subtitleRef.current) observer.unobserve(subtitleRef.current);
            if (iconRef.current) observer.unobserve(iconRef.current);
        };
    }, []);

    return (
        <div className="divDoveSiamo">
            <Flex gap="small" align="start" vertical className="title-and-icon-container-dove-siamo">
                <Flex className="flex-division-dove-siamo">
                    <p className="dove-siamo-division-title" ref={titleRef}>{title}</p>
                    <img className="dove-siamo-division-icon" src={icon} ref={iconRef} />
                </Flex>
            </Flex>
            <p className="dove-siamo-division-description" ref={subtitleRef} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}

export default DoveSiamoDivision;