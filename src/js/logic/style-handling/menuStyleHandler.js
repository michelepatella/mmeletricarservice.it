/**
 * Method to handle the style-handling of the parent items of the small menu.
 * @param section
 * @param menuItem
 * @returns {{textDecoration: (string), fontWeight: (string)}}
 */
export const handleParentStyle = (section, menuItem) => {
	return {
		fontWeight:
			section === menuItem?.href.replace("#", "")
				? "bold"
				: "normal",
	};
};

/**
 * Method to handle the style-handling of the parent items of the small menu.
 * @param section
 * @param child
 * @returns {{
 * textDecoration: (string),
 * paddingLeft: string,
 * fontWeight: (string)
 * }}
 */
export const handleChildrenStyle = (section, child) => {
	return {
		fontWeight:
			section === child?.href.replace("#", "")
				? "bold"
				: "normal",
		paddingLeft: "var(--menu_childrens_padding_left)",
	};
};

/**
 * Method to handle the hamburger button's style-handling dynamically.
 * @param visible
 * @returns {{display: (string)}}
 */
export const handleHamburgerButtonStyle = (visible) => {
	return {
		display: visible ? "none" : "flex",
	};
};
