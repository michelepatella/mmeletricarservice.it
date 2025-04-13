/**
 * Method to handle the cookie's banner switch style dynamically
 * @param tempPreferences
 * @param type
 * @returns {{backgroundColor: (string)}}
 */
export const handleSwitchStyle = (tempPreferences, type) => {
    return {
        backgroundColor: tempPreferences || type === "necessary-cookie"
            ? "var(--blue_color)" : "gray",
    };
}