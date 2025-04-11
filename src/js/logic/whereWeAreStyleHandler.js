/**
 * Method to handle the Google Maps container style (when not available) dynamically
 * @returns {{background: string, opacity: string}}
 */
export const handleGoogleMapsContainerStyle = () => {
    return {
        height: '35vh',
        background: 'url(/icons/map_icon.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '10%',
        opacity: '0.3',
    };
};

/**
 * Method to handle the description when Google Maps is not available dynamically
 * @returns {{marginRight: string, textAlign: string, marginTop: string, marginLeft: string}}
 */
export const handleGoogleMapsUnavailableDescriptionStyle = () => {
    return {
        textAlign: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "15%"
    };
};