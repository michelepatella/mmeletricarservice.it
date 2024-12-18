import '../../../css/servizi/auto usate/AutoUsate.css';
import React, { useEffect, useRef } from "react";
import {
    AUTO_USATE_TITLE,
    AUTO_USATE_DESCRIPTION,
    CARD_AUTO_USATE,
    FACEBOOK_LINK_AUTO_USATE
} from "../../utility/constants";
import CardAutoUsate from "./CardAutoUsate";
import {Row} from "antd";
import CustomButton from "../../utility/CustomButton";

/**
 * This component contains the auto usate section
 * @returns {Element}
 * @constructor
 */
function AutoUsate() {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    /**
     * Method to keep track if the section Auto usate is visible
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
        <div id="auto-usate" className="auto-usate-container">
            {/* Title */}
            <h2 ref={titleRef} className="auto-usate-title">{AUTO_USATE_TITLE}</h2>

            {/* Description */}
            <p ref={subtitleRef} className="auto-usate-subtitle">{AUTO_USATE_DESCRIPTION}</p>

            <Row className="custom-statistic-grid" align="center">
                {/* Add a card division for each informative card */}
                {CARD_AUTO_USATE.map((cardAutoUsate, index) => (
                    <CardAutoUsate
                        key={index}
                        description={cardAutoUsate.description}
                    />
                ))}
            </Row>

            {/* Facebook link */}
            <CustomButton
                value={FACEBOOK_LINK_AUTO_USATE}
                icon='/icons/facebookIconBlack.svg'/>

        </div>
    );
}

export default AutoUsate;