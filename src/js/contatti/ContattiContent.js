import React, {useEffect, useRef} from "react";
import {CONTATTI_TITLE, CONTATTI_SUBTITLE} from "../constants";
import '../../css/contatti/ContattiContent.css';
import {Button} from "antd";

/**
 * This component contains the contatti content
 * @returns {Element}
 * @constructor
 */
function ContattiContent(props) {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    /**
     * Method to keep track if the section Contatti is visible
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
        <div className="title-contatti-container">

            {/* Title */}
            <h1 className="contatti-title" dangerouslySetInnerHTML={{__html: CONTATTI_TITLE}} ref={titleRef}/>

            {/* Subtitle */}
            <p className="contatti-description" dangerouslySetInnerHTML={{__html: CONTATTI_SUBTITLE}} ref={subtitleRef}/>

            <div className="contact-buttons-container">
                <Button classNames="phone-button" type="primary" shape="round"/>
                <Button classNames="email-button" type="primary" shape="round"/>
                <Button classNames="pec-button" type="primary" shape="round"/>
                <Button classNames="facebook-button" type="primary" shape="round"/>
            </div>



        </div>
    );
}

export default ContattiContent;