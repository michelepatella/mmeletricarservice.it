import '../../css/servizi/AltriServizi.css';
import React, { useEffect, useRef } from "react";
import CardServizio from "./CardServizio";
import { SERVIZI } from "../constants";

function AltriServizi() {
    const sectionRef = useRef(null);

    /**
     * Method to make the animation always available
     */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-cards');
                } else {
                    entry.target.classList.remove('animate-cards');
                }
            });
        }, {
            threshold: 0.5,
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="altri-servizi" id="altri-servizi" ref={sectionRef}>
            {/* Add a card for each service */}
            {SERVIZI.map((servizio, index) => (
                <CardServizio
                    key={index}
                    title={servizio.title}
                    description={servizio.description}
                    color={servizio.color}
                    borderColor={servizio.borderColor}
                />
            ))}
        </div>
    );
}

export default AltriServizi;