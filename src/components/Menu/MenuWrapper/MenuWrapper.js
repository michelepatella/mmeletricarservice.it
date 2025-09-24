import MenuSmallScreen from "../MenuSmallScreen/MenuSmallScreen.js";
import MenuBigScreen from "../MenuBigScreen/MenuBigScreen.js";

/**
 * This component represent the wrapper of the
 * web application menus. It has two menus, each of them
 * shown depending on the screen size:
 * - Menu big screen: it is an anchor Menu, shown
 *   in case of big screens (e.g., desktop).
 * - Menu small screen: it is a hamburger Menu, shown
 *   in case of small screens (e.g., smartphone).
 * @returns {JSX.Element} — The menu wrapper component.
 */
function MenuWrapper() {
	return (
		<>
			{/* Menu for big screens (Anchor Menu) */}
			<MenuBigScreen />

			{/* Menu for small screens (Hamburger Menu) */}
			<MenuSmallScreen />
		</>
	);
}

export default MenuWrapper;
