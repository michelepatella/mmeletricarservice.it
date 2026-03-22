import React from "react";
import { Button, Drawer, Menu as AntMenu } from "antd";
import {
	CloseOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import {
	HAMBURGER_BUTTON_CLASS_NAME,
	HAMBURGER_BUTTON_SHAPE,
	MENU_SMALL_CHILDREN_ITEM_CLASS_NAME,
	MENU_SMALL_CLOSE_OUTLINE_CLASS_NAME,
	MENU_SMALL_CONTAINER_CLASS_NAME,
	MENU_SMALL_DRAWER_PLACEMENT,
} from "./const.js";
import { useMenu } from "../use-menu/use-menu.js";
import {
	getMenuParentItemStyle,
	getMenuChildrenItemStyle,
	getHamburgerButtonStyle,
} from "./style-handler.js";

/**
 * This component represents the menu for small screens, implemented
 * as a hamburger menu shown when the hamburger button is clicked.
 * @returns {React.JSX.Element} — The menu component for small screen.
 */
function MenuSmallScreen() {
	// Prepare hamburger menu elements
	const { menuItems, section, visible, toggleDrawer } =
		useMenu();

	return (
		<div className={MENU_SMALL_CONTAINER_CLASS_NAME}>
			{/* Hamburger button (to open the hamburger menu) */}
			<Button
				className={HAMBURGER_BUTTON_CLASS_NAME}
				shape={HAMBURGER_BUTTON_SHAPE}
				icon={<MenuOutlined />}
				onClick={toggleDrawer}
				style={getHamburgerButtonStyle(visible)}
			/>

			{/* Drawer for containing the menu */}
			<Drawer
				placement={MENU_SMALL_DRAWER_PLACEMENT}
				closable
				closeIcon={
					<CloseOutlined
						className={MENU_SMALL_CLOSE_OUTLINE_CLASS_NAME}
					/>
				}
				onClose={toggleDrawer}
				open={visible}
			>
				{/* Menu */}
				<AntMenu>
					{/* Parent and children items generation */}
					{menuItems?.map((menuItem) => (
						<React.Fragment key={menuItem?.key}>
							{/* Parent items generation */}
							<AntMenu.Item
								key={menuItem?.key}
								onClick={menuItem?.onClick}
								style={getMenuParentItemStyle(
									section,
									menuItem
								)}
							>
								{menuItem?.title}
							</AntMenu.Item>

							{/* Children items generation */}
							{menuItem?.children?.map((child) => (
								<AntMenu.Item
									key={child?.key}
									className={
										MENU_SMALL_CHILDREN_ITEM_CLASS_NAME
									}
									onClick={child?.onClick}
									style={getMenuChildrenItemStyle(
										section,
										child
									)}
								>
									{child?.title}
								</AntMenu.Item>
							))}
						</React.Fragment>
					))}
				</AntMenu>
			</Drawer>
		</div>
	);
}

export default MenuSmallScreen;
