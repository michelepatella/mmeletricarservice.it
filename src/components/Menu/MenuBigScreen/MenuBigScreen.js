import { Anchor } from "antd";
import { MENU_BIG_CONTAINER_CLASS_NAME } from "./const.js";
import { useMenu } from "../useMenu.js";

/**
 * This component represents the anchor Menu
 * used when the web application is visualized by big screens.
 * @returns {React.JSX.Element} — The menu component for big screens.
 */
function MenuBigScreen() {
	// Prepare anchor Menu elements
	const { menuItems, section } =
		useMenu();

	return (
		<div className={MENU_BIG_CONTAINER_CLASS_NAME}>
			{/* Menu */}
			<Anchor
				items={menuItems}
				getCurrentAnchor={() => "#" + section}
			/>
		</div>
	);
}

export default MenuBigScreen;
