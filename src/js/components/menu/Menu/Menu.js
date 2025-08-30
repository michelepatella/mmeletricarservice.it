import MenuSmallScreen from "../MenuSmallScreen";
import MenuBigScreen from "../MenuBigScreen";

/**
 * This component represent the Menu of the
 * web application. It has two menus, each of them
 * shown depending on the screen size:
 * - Menu big screen: it is an anchor menu, shown
 *   in case of big screens (e.g., desktop).
 * - Menu small screen: it is a hamburger menu, shown
 *   in case of small screens (e.g., smartphone).
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = () => {
	return (
		<>
			{/* Menu for big screens (Anchor menu) */}
			<MenuBigScreen />

			{/* Menu for small screens (Hamburger menu) */}
			<MenuSmallScreen />
		</>
	);
};

export default Menu;
