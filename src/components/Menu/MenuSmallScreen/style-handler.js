/**
 * Method to get the style of the parent items of the small menu.
 * @param section — The current section.
 * @param menuItem — The menu item for which to determine
 * CSS style.
 * @returns {{fontWeight: string}} — CSS style.
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
 * @param section — The current section.
 * @param child — The child for which to determine CSS sytle.
 * @returns {{
 * 	fontWeight: string
 * 	paddingLeft: number,
 * }} — CSS style.
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
		paddingLeft: "var(--padding-xlarge)",
	};
};

/**
 * Method to get the hamburger button's style.
 * @param visible — State keeping track of menu visibility.
 * @returns {{display: string}} — CSS style.
 */
export const getHamburgerButtonStyle = (visible) => {
	return {
		display: visible
			? "var(--display-none)"
			: "var(--display-flex)",
	};
};
