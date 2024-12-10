import '../../css/chi siamo/NostriValori.css';
import React, {useEffect, useRef} from "react";
import {NOSTRI_VALORI_DESCRIPTION, NOSTRI_VALORI_TITLE} from "../constants";

/**
 * This component contains the i nostri valori section, subsection of chi siamo
 * @returns {Element}
 * @constructor
 */
function NostriValori() {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    /**
     * Method to keep track if the section Nostri valori is visible
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
        <>
            {/* Nostri valori description definition */}
            <div id="nostri-valori" className="nostri-valori-container">
                {/* Title */}
                <h2 className="nostri-valori-title" ref={titleRef}>{NOSTRI_VALORI_TITLE}</h2>

                {/* Description */}
                <p className="nostri-valori-subtitle" ref={subtitleRef} dangerouslySetInnerHTML={{ __html: NOSTRI_VALORI_DESCRIPTION }} />
            </div>
        </>
    );
}

export default NostriValori;