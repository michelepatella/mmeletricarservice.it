import { Anchor } from "antd";
import { motion } from "framer-motion";
import {
	MENU_ARIA_LABEL,
	MENU_BIG_CONTAINER_CLASS_NAME,
	MENU_BIG_INITIAL_OPACITY,
	MENU_BIG_INITIAL_X_POSITION,
	MENU_BIG_MOTION_SECTION_CLASS_NAME,
} from "../../../utils/const";
import { useMenu } from "../../../hooks/useMenu";

/**
 * This component represents the anchor menu
 * used when the web application is visualized by big screens (e.g., desktop).
 * The anchor menu is characterized by an entry motion animation.
 * Each menu element is described by # followed by its id.
 * @returns {React.JSX.Element}
 * @constructor
 */
function MenuBigScreen() {
	// Prepare anchor menu elements
	const { menuItems, menuItemControls, section } =
		useMenu();

	return (
		<div className={MENU_BIG_CONTAINER_CLASS_NAME}>
			{/* Motion section for the menu animation */}
			<motion.section
				className={MENU_BIG_MOTION_SECTION_CLASS_NAME}
				aria-label={MENU_ARIA_LABEL}
				animate={menuItemControls}
				initial={{
					opacity: MENU_BIG_INITIAL_OPACITY,
					x: MENU_BIG_INITIAL_X_POSITION,
				}}
			>
				{/* Menu */}
				<Anchor
					items={menuItems}
					getCurrentAnchor={() => "#" + section}
				/>
			</motion.section>
		</div>
	);
}

export default MenuBigScreen;
