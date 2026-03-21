import React from "react";
import { Anchor } from "antd";
import { MENU_BIG_CONTAINER_CLASS_NAME } from "./const.js";
import { useMenu } from "../use-menu.js";

/**
 * This component represents the anchor menu for big screens.
 * @returns {React.JSX.Element} — The menu component for big screens.
 */
function MenuBigScreen() {
	// Prepare anchor menu elements
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
