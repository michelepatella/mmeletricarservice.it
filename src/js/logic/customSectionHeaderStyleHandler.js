/**
 * Method to handle the style of the name of the
 * section of the custom section header dynamically
 * @returns {{fontFamily: string, color: string, marginBottom: number, opacity: number, fontWeight: string}}
 */
export const handleSectionNameStyle = () => {
    return {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: "bold",
        color: "var(--accent_color)",
        opacity: 0.8,
        marginBottom: 0
    };
};

/**
 * Method to handle the style of the subtitle
 * of the custom section header dynamically
 * @returns {{textAlign: string, width: string}}
 */
export const handleDescriptionStyle = (hasMedia) => {
    return {
        width: "85%",
        marginBottom: hasMedia ? "var(--custom_section_header_subtitle_margin_bottom)" : null,
        textAlign: "center",
        opacity: 0.8
    };
};