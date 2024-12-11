import '../../css/servizi/DivServizio.css';
import React, {useEffect, useRef} from "react";

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

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (subtitleRef.current) observer.unobserve(subtitleRef.current);
        };
    }, []);

    return (
        <div className="divServizio">
            {/*<img className="cardIcon" src={icon}/>*/}
            <p className="title-servizio" ref={titleRef}>{title}</p>
            <p className="description-servizio"ref={subtitleRef}>{description}</p>
        </div>
    );
}

export default DivServizio;