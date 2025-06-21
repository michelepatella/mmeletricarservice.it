import { Anchor } from "antd";
import { motion } from "framer-motion";
import { useMenu } from "../../hooks/useMenu";

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
	const {
		menuItems,
		menuItemControls,
		section
	} = useMenu();

	return (
		<div className="menu-container-big">
			{/* Motion division for the menu animation */}
			<motion.div
				animate={menuItemControls}
				initial={{
					opacity: 0,
					x: -100,
				}}
			>
				{/* Menu */}
				<Anchor
					affix={false}
					items={menuItems}
					getCurrentAnchor={() => "#" + section}
				/>
			</motion.div>
		</div>
	);
}

export default MenuBigScreen;
