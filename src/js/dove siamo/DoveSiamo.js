import '../../css/dove siamo/DoveSiamo.css';
import React, { useRef } from "react";
import {Row} from "antd";
import {DOVE_SIAMO_DIVISIONS, DOVE_SIAMO_TITLE} from "../utility/constants";
import DivDoveSiamo from "./DivDoveSiamo";
import useIntersectionObserver from "../utility/useIntersectionObserver";

/**
 * This component contains the dove siamo section
 * @returns {Element}
 * @constructor
 */
function DoveSiamo() {

    const titleRef = useRef(null);

    useIntersectionObserver(titleRef);

    return (
        <div id="dove-siamo" className="dove-siamo-container">
            {/* Title */}
            <h2 ref={titleRef} className="dove-siamo-title">{DOVE_SIAMO_TITLE}</h2>

            <Row className="dove-siamo-main-container">
                <Row className="dove-siamo-grid">
                    {DOVE_SIAMO_DIVISIONS.map((doveSiamoDivision, index) => (
                        <DivDoveSiamo
                            key={index}
                            title={doveSiamoDivision.title}
                            description={doveSiamoDivision.description}
                            icon={doveSiamoDivision.icon}
                        />
                    ))}

                    <div className="google-map-container">
                        {/*<iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10733.473868158232!2d16.4217779!3d40.8133596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133f3f8556e5b9ff%3A0x46c6a8b1785d90!2sVia%20Bizet%2C%2063%2C%2007015%20Gravina%20in%20Puglia%20BA%2C%20Italy!5e0!3m2!1sen!2sus!4v1608895604453!5m2!1sen!2sus"
                            width="600" height="450" loading="lazy">
                        </iframe>*/}
                    </div>
                </Row>
            </Row>

        </div>
    );
}

export default DoveSiamo;