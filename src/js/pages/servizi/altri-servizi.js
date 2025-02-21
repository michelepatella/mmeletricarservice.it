import '../../../styles/pages/altri-servizi.css';
import React from "react";
import DivServizio from "../../components/servizi/DivServizio";
import { SERVIZI } from "../../utility/constants";

/**
 * That's the "altri servizi" page
 * @returns {Element}
 * @constructor
 */
function AltriServizi() {

    return (
        <>
            {/* Global division */}
            <div className="altri-servizi" id="altri-servizi">

                {/* Add a service division for each service */}
                {SERVIZI.map((servizio, index) => (
                    <DivServizio
                        key={index}
                        title={servizio.title}
                        description={servizio.description}
                        icon={servizio.icon}
                    />
                ))}
            </div>
        </>
    );
}

export default AltriServizi;