import {Helmet} from "react-helmet";
import React from "react";

/**
 * Custom Car Helmet
 * @param props
 * @returns {React.JSX.Element}
 * @constructor
 */
function CustomCarHelmet(props) {
    return (

        <Helmet>

            {/* Title (Name - Price) */}
            <meta
                property="og:title"
                content={props.usedCarOverview.name + ' - ' + props.usedCarOverview.price} />

            {/* Description (year, mileage, fuel and car's status) */}
            <meta
                property="og:description"
                content={"🗓️Anno: " + props.usedCarOverview.year +
                        " | 🛣️Chilometraggio: " + props.usedCarOverview.mileage +
                        " | ⛽️Carburante: " + props.usedCarOverview.fuel +
                        " | 🚘Stato dell'auto: " + props.usedCarOverview.status} />

            {/* URL */}
            <meta
                property="og:url"
                content={'https://mmeletricarservice.it/used-cars' + props.usedCarOverview.id} />

            {/* Image */}
            <meta
                property="og:image"
                content={props.usedCarOverview.image} />

            {/* Type */}
            <meta
                property="og:type"
                content="website" />

        </Helmet>

    );
}

export default CustomCarHelmet;