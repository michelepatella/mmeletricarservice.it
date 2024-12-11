import '../../css/servizi/DivServizio.css';
import React, {useEffect, useRef} from "react";
import {Flex} from "antd";

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
    const iconRef = useRef(null);

    /**
     * Method to keep track if the section Altri servizi is visible
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
        <div className="divServizio">
            <Flex gap="small" align="start" vertical className="title-and-icon-container">
                <Flex className="flex-division">
                    <p className="title-servizio" ref={titleRef}>{title}</p>
                    <img className="servizio-icon" src={icon} ref={iconRef} />
                </Flex>
            </Flex>
            <p className="description-servizio" ref={subtitleRef}>{description}</p>
        </div>
    );
}

export default DivServizio;