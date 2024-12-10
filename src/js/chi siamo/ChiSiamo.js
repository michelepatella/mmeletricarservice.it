import '../../css/chi siamo/ChiSiamo.css';
import React, { useEffect, useRef } from "react";
import { CHI_SIAMO_DESCRIPTION, CHI_SIAMO_TITLE } from "../constants";

/**
 * This component contains the chi siamo section
 * @returns {Element}
 * @constructor
 */
function ChiSiamo() {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    /**
     * Method to keep track if the section Chi siamo is visible
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

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (subtitleRef.current) observer.unobserve(subtitleRef.current);
        };
    }, []);

    return (
        <div id="chi-siamo" className="chi-siamo-container">
            {/* Title */}
            <h2 ref={titleRef} className="chi-siamo-title">{CHI_SIAMO_TITLE}</h2>

            {/* Description */}
            <p ref={subtitleRef} className="chi-siamo-subtitle" dangerouslySetInnerHTML={{ __html: CHI_SIAMO_DESCRIPTION }} />
        </div>
    );
}

export default ChiSiamo;