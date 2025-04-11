/**
 * Method to handle the style of the name and the price
 * of the used cars card dynamically
 * @returns {{opacity: number, fontWeight: string}}
 */
export const handleNamePriceStyle = () => {
    return {
        fontWeight: "bold",
        opacity: 1,
        alignSelf: "right"
    };
};

/**
 * Method to handle the style of the info card text overview
 * style dynamically
 * @returns {{marginBottom: string, opacity: number, marginTop: number}}
 */
export const handleTextOverviewStyle = () => {
    return {
        fontFamily: 'Poppins',
        opacity: 0.7,
        marginTop: 0,
        marginBottom: 'var(--used_car_overview_margin_top)'
    };
};

/**
 * Method to handle the style of the scroll label of the user cars
 * section dynamically
 * @returns {{textAlign: string, opacity: number, marginLeft: string}}
 */
export const handleScrollLabelStyle = () => {
    return {
        opacity: 0.8,
        textAlign: 'center',
        marginLeft: '22%'
    };
};