/**
 * Method to handle the style of the name and the price
 * of the used cars card dynamically
 * @returns {{opacity: number, fontWeight: string}}
 */
export const handleNamePriceStyle = () => {
    return {
        fontWeight: "bold",
        alignSelf: "right",
    };
};

/**
 * Method to handle the style of the info card text overview
 * style dynamically
 * @returns {{marginBottom: string, opacity: number, marginTop: number}}
 */
export const handleTextOverviewStyle = (isTitleVisible) => {
    return {
        marginTop: 0,
        marginBottom: 'var(--used_car_overview_text_margin_top)',
        fontFamily: 'Poppins',
        fontWeight: isTitleVisible ? 'bold' : 'normal',
        opacity: 'var(--text_opacity)',
    };
};

/**
 * Method to handle the style of the scroll label of the user cars
 * section dynamically
 * @returns {{textAlign: string, opacity: number, marginLeft: string}}
 */
export const handleScrollLabelStyle = () => {
    return {
        marginLeft: 'var(--used_cars_scroll_label_margin_left)',
        textAlign: 'center',
        opacity: 'var(--text_opacity)'
    };
};