import '../../css/servizi/AltriServizi.css';
import React from "react";
import DivServizio from "./DivServizio";
import { SERVIZI } from "../constants";

function AltriServizi() {

    return (
        <>
            <div className="altri-servizi" id="altri-servizi">
                {/* Add a card for each service */}
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