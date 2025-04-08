/**
 * Method to handle the style of the parent items of the small menu
 * @param section
 * @param menuItem
 * @returns {{textDecoration: (string), fontWeight: (string)}}
 */
export const handleParentItemStyle = (section, menuItem) => {
    return {
        fontWeight:
            section === menuItem.href.replace('#', '') ?
                'bold' : 'normal',
    };
};

/**
 * Method to handle the style of the parent items of the small menu
 * @param section
 * @param child
 * @returns {{textDecoration: (string), paddingLeft: string, fontWeight: (string)}}
 */
export const handleChildrenStyle = (section, child) => {
    return {
        fontWeight:
            section === child.href.replace('#', '') ?
                'bold' : 'normal',
        paddingLeft: '60px',
    };
};

/**
 * Method to handle the cookie's banner switch style dynamically
 * @param tempPreferences
 * @param type
 * @returns {{backgroundColor: (string)}}
 */
export const handleSwitchStyle = (tempPreferences, type) => {
    return {
        backgroundColor: tempPreferences || type === "necessary-cookie" ? "var(--blue_color)" : "gray",
    };
}

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

/**
 * Method to handle the custom info card's title style dynamically
 * @returns {{color: string, fontWeight: string}}
 */
export const handleCustomInfoCardTitleStyle = () => {
    return {
        fontWeight: "bold",
        color: "var(--accent_color)"
    };
};

/**
 * Method to handle the hamburger button's style dynamically
 * @param visible
 * @returns {{display: (string)}}
 */
export const handleHamburgerButtonStyle = (visible) => {
    return {
        display: visible ? 'none' : 'flex'
    };
};

/**
 * Method to handle the custom background container style dynamically
 * @param image
 * @returns {{background: string}}
 */
export const handleCustomBackgroundContainerStyle = (image) => {
    return {
        height: '130vh',
        background:
            'linear-gradient(to top, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 1) 100%), ' +
            'linear-gradient(to bottom, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 1) 100%), ' +
            'linear-gradient(to left, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 1) 100%), ' +
            'url(' + image + ')',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
};

/**
 * Method to handle the style of the name of the
 * section of the custom section header dynamically
 * @returns {{fontFamily: string, color: string, marginBottom: number, opacity: number, fontWeight: string}}
 */
export const handleCustomSectionHeaderSectionNameStyle = () => {
    return {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: "bold",
        color: "var(--accent_color)",
        opacity: 0.9,
        marginBottom: 0
    };
};

/**
 * Method to handle the style of the subtitle
 * of the custom section header dynamically
 * @returns {{textAlign: string, width: string}}
 */
export const handleCustomSectionHeaderDescriptionStyle = (hasMedia) => {
    return {
        width: "85%",
        marginBottom: hasMedia ? "var(--custom_section_header_subtitle_margin_bottom)" : null,
        textAlign: "center",
        opacity: 0.8
    };
};