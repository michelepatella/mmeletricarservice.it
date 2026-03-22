import React from "react";
import MenuSmallScreen from "../MenuSmallScreen/MenuSmallScreen.js";
import MenuBigScreen from "../MenuBigScreen/MenuBigScreen.js";

/**
 * This component represents the wrapper of the webapp menus:
 * - Menu big screen: An anchor menu.
 * - Menu small screen: A hamburger menu.
 * @returns {JSX.Element} — The menu wrapper component.
 */
function MenuWrapper() {
	return (
		<>
			{/* Menu for big screens (anchor menu) */}
			<MenuBigScreen />

			{/* Menu for small screens (hamburger menu) */}
			<MenuSmallScreen />
		</>
	);
}

export default MenuWrapper;
