/**
 * Method to get the style of the parent items of the small menu.
 * @param section
 * @param menuItem
 * @returns {{textDecoration: (string), fontWeight: (string)}}
 */
export const getMenuParentItemStyle = (
	section,
	menuItem
) => {
	return {
		fontWeight:
			section === menuItem?.href.replace("#", "")
				? "var(--font-weight-bold)"
				: "var(--font-weight-normal)",
	};
};

/**
 * Method to get the style of the parent items of the small menu.
 * @param section
 * @param child
 * @returns {{
 * textDecoration: (string),
 * paddingLeft: string,
 * fontWeight: (string)
 * }}
 */
export const getMenuChildrenItemStyle = (
	section,
	child
) => {
	return {
		fontWeight:
			section === child?.href.replace("#", "")
				? "var(--font-weight-bold)"
				: "var(--font-weight-normal)",
		paddingLeft: "var(--menu-small-screen-children-padding-left)",
	};
};

/**
 * Method to get the hamburger button's style.
 * @param visible
 * @returns {{display: (string)}}
 */
export const getHamburgerButtonStyle = (visible) => {
	return {
		display: visible ? "var(--display-none)" : "var(--display-flex)",
	};
};
