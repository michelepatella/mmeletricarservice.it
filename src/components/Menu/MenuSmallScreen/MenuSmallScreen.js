import React from "react";
import { Button, Drawer, Menu as AntMenu } from "antd";
import {
	CloseOutlined,
	MenuOutlined,
} from "@ant-design/icons";
import {
	HAMBURGER_BUTTON_CLASS_NAME,
	HAMBURGER_BUTTON_SHAPE, HAMBURGER_BUTTON_TYPE,
	MENU_SMALL_CHILDREN_ITEM_CLASS_NAME,
	MENU_SMALL_CLOSE_OUTLINE_CLASS_NAME, MENU_SMALL_CONTAINER_CLASS_NAME,
	MENU_SMALL_DRAWER_PLACEMENT,
} from "./const";
import { useMenu } from "../useMenu";
import {
	getMenuParentItemStyle,
	getMenuChildrenItemStyle,
	getHamburgerButtonStyle,
} from "./styleHandler";

/**
 * This component represents the Menu for small screens (e.g., smartphone).
 * It leverages a hamburger Menu shown whenever the hamburger button is clicked.
 * The Menu appears to the right
 * @returns {React.JSX.Element}
 * @constructor
 */
function MenuSmallScreen() {
	// Prepare hamburger Menu elements
	const { menuItems, section, visible, toggleDrawer } =
		useMenu();

	return (
		<div className={MENU_SMALL_CONTAINER_CLASS_NAME}>
			{/* Hamburger button (to open the hamburger Menu) */}
			<Button
				type={HAMBURGER_BUTTON_TYPE}
				className={HAMBURGER_BUTTON_CLASS_NAME}
				shape={HAMBURGER_BUTTON_SHAPE}
				icon={<MenuOutlined />}
				onClick={toggleDrawer}
				style={getHamburgerButtonStyle(visible)}
			/>

			{/* Drawer for containing the Menu */}
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
								style={getMenuParentItemStyle(section, menuItem)}
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
