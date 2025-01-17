import '../../css/dove siamo/DoveSiamo.css';
import {Row} from "antd";
import {DOVE_SIAMO_DIVISIONS, DOVE_SIAMO_TITLE} from "../utility/constants";
import DivDoveSiamo from "./DivDoveSiamo";

/**
 * This component contains the dove siamo section
 * @returns {Element}
 * @constructor
 */
function DoveSiamo() {

    return (
        <div id="dove-siamo" className="dove-siamo-container">
            {/* Title */}
            <h2 className="dove-siamo-title">{DOVE_SIAMO_TITLE}</h2>

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

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.143408468909!2d16.4256612!3d40.8248136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387b9989c61785%3A0xaa80de53bd394020!2sMM%20Eletricar%20Service%20di%20Vacca%20%26%20Scalese%20snc%20%E2%80%A2%20Meccatronica%20%E2%80%A2%20Elettrauto!5e0!3m2!1sit!2sit!4v1735907615314!5m2!1sit!2sit"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="google-maps" className="google-maps-iframe">
                        </iframe>
                    </div>
                </Row>
            </Row>

        </div>
    );
}

export default DoveSiamo;