import '../../css/servizi/IntroServizi.css';
import React, {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import {INTRO_SERVIZI_TITLE, INTRO_SERVIZI_DESCRIPTION, ARROW_LABEL} from "../constants";

/**
 * This component contains the intro servizi section
 * @returns {Element}
 * @constructor
 */
function IntroServizi() {

    /**
     * Method to go to the Altri servizi section by using the arrow
     * @param sectionId
     */
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    /**
     * Method to keep track if the section Intro servizi is visible
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
            {/* Intro servizi description definition */}
            <div id="intro-servizi" className="intro-servizi-container">
                {/* Title */}
                <h2 className="intro-servizi-title" ref={titleRef} dangerouslySetInnerHTML={{ __html: INTRO_SERVIZI_TITLE }}/>

                {/* Description */}
                <p className="intro-servizi-subtitle" ref={subtitleRef} dangerouslySetInnerHTML={{ __html: INTRO_SERVIZI_DESCRIPTION }}/>
            </div>

            <div className="arrow-and-label-container">
                {/*Arrow label and arrow for going to the next section*/}
                <p className="arrow-label">{ARROW_LABEL}</p>
                <button className="arrow-button" onClick={() => scrollToSection('altri-servizi')}></button>
            </div>
        </>
    );
}

export default IntroServizi;