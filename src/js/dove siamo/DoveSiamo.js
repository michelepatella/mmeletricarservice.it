import '../../css/dove siamo/DoveSiamo.css';
import React, { useEffect, useRef } from "react";
import {Row} from "antd";
import {DOVE_SIAMO_DIVISIONS, DOVE_SIAMO_TITLE, MAPS_LINK_TITLE} from "../utility/constants";
import DoveSiamoDivision from "./DoveSiamoDivision";
import CustomButton from "../utility/CustomButton";

/**
 * This component contains the dove siamo section
 * @returns {Element}
 * @constructor
 */
function DoveSiamo() {

    const titleRef = useRef(null);

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

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    return (
        <div id="dove-siamo" className="dove-siamo-container">
            {/* Title */}
            <h2 ref={titleRef} className="dove-siamo-title">{DOVE_SIAMO_TITLE}</h2>

            <Row className="dove-siamo-grid" align="center">
                {DOVE_SIAMO_DIVISIONS.map((doveSiamoDivision, index) => (
                    <DoveSiamoDivision
                        key={index}
                        title={doveSiamoDivision.title}
                        description={doveSiamoDivision.description}
                        icon={doveSiamoDivision.icon}
                    />
                ))}
            </Row>

            {/*Maps link*/}
            <CustomButton
                value={MAPS_LINK_TITLE}
                icon='/icons/map2Icon.svg'/>

        </div>
    );
}

export default DoveSiamo;