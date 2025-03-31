/**
 * Method to handle the style of the parent items of the small menu
 * @param section
 * @param menuItem
 * @returns {{textDecoration: (string), fontWeight: (string)}}
 */
export const handleParentItemStyle = (section, menuItem) => {
    return {
        textDecoration:
            section === menuItem.href.replace('#', '') ?
                'underline' : 'none',
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
        textDecoration:
            section === child.href.replace('#', '') ?
                'underline' : 'none',
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
        backgroundColor: tempPreferences || type === "necessary-cookie" ? '#F8DE4D' : '#3C3C3C'
    };
}

/**
 * Method to handle the Google Maps container style (when not available) dynamically
 * @returns {{background: string, opacity: string}}
 */
export const handleGoogleMapsContainerStyle = () => {
    return {
        height: '35vh',
        background: 'url(/icons/unavailableMapIcon.svg)',
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
}

/**
 * Method to handle the arrow button label style of "Servizi" section (intro)
 * @returns {{color: string, opacity: string}}
 */
export const handleArrowButtonLabelStyle = () => {
    return {
        color: 'var(--accent_color)',
        opacity: '0.8'
    };
};