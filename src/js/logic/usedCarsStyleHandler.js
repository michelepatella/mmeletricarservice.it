/**
 * Method to handle the style of the name and the price
 * of the used cars card dynamically
 * @returns {{opacity: number, fontWeight: string}}
 */
export const handleNamePriceStyle = () => {
    return {
        fontWeight: "bold",
        alignSelf: "right",
        opacity: 1,
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
        marginBottom: 'var(--used_car_overview_margin_top)',
        fontFamily: 'Poppins',
        fontWeight: isTitleVisible ? 'bold' : 'normal',
        opacity: 0.7,
    };
};

/**
 * Method to handle the style of the scroll label of the user cars
 * section dynamically
 * @returns {{textAlign: string, opacity: number, marginLeft: string}}
 */
export const handleScrollLabelStyle = () => {
    return {
        marginLeft: '22%',
        textAlign: 'center',
        opacity: 0.8
    };
};