/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock("../use-menu/use-menu.js", () => ({
	useMenu: jest.fn(),
}));
jest.mock("./style-handler.js", () => ({
	getMenuParentItemStyle: jest.fn(() => ({})),
	getMenuChildrenItemStyle: jest.fn(() => ({})),
	getHamburgerButtonStyle: jest.fn(() => ({})),
}));

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuSmallScreen from "./MenuSmallScreen.js";
import { useMenu } from "../use-menu/use-menu.js";
import {
	HAMBURGER_BUTTON_CLASS_NAME,
	MENU_SMALL_CONTAINER_CLASS_NAME,
	MENU_SMALL_CLOSE_OUTLINE_CLASS_NAME,
	MENU_SMALL_CHILDREN_ITEM_CLASS_NAME,
} from "./const.js";

// Mock menu items
const mockToggleDrawer = jest.fn();
const mockMenuItems = [
	{
		key: "1",
		title: "Parent 1",
		onClick: jest.fn(),
		children: [
			{ key: "1-1", title: "Child 1", onClick: jest.fn() },
			{ key: "1-2", title: "Child 2", onClick: jest.fn() },
		],
	},
	{
		key: "2",
		title: "Parent 2",
		onClick: jest.fn(),
		children: [],
	},
];

// Mock useMenu hook
useMenu.mockReturnValue({
	menuItems: mockMenuItems,
	section: "1",
	visible: true,
	toggleDrawer: mockToggleDrawer,
});

/**
 * Test suite for MenuSmallScreen component.
 * This suite contains:
 * 1. A test to verify the container and hamburger button rendering.
 * 2. A test to verify that clicking the hamburger button calls toggleDrawer.
 * 3. A test to verify that the drawer renders with correct props.
 * 4. A test to verify that parent and children menu items render correctly.
 */
describe("MenuSmallScreen", () => {

	/**
	 * CASE 1: RENDERS CONTAINER AND HAMBURGER BUTTON
	 * This test verifies that the container div and the hamburger
     * button are correctly rendered.
	 */
	it("renders container and hamburger button", () => {
		render(<MenuSmallScreen />);

		// eslint-disable-next-line testing-library/no-node-access
		const container = document.querySelector("." + MENU_SMALL_CONTAINER_CLASS_NAME);
        // eslint-disable-next-line testing-library/no-node-access
		const button = document.querySelector("." + HAMBURGER_BUTTON_CLASS_NAME);

		expect(container).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	/**
	 * CASE 2: HAMBURGER BUTTON CLICK
	 * This test verifies that clicking the hamburger button calls toggleDrawer.
	 */
	it("calls toggleDrawer when hamburger button is clicked", () => {
		render(<MenuSmallScreen />);

        // eslint-disable-next-line testing-library/no-node-access
		const button = document.querySelector("." + HAMBURGER_BUTTON_CLASS_NAME);
		fireEvent.click(button);

		expect(mockToggleDrawer).toHaveBeenCalled();
	});

	/**
	 * CASE 3: DRAWER RENDERING
	 * This test verifies that the drawer is rendered with correct
     * placement and closeIcon.
	 */
	it("renders drawer with correct props", () => {
		render(<MenuSmallScreen />);
        
        // eslint-disable-next-line testing-library/no-node-access
		const drawer = document.querySelector("[role='dialog']");
		expect(drawer).toBeInTheDocument();

		// eslint-disable-next-line testing-library/no-node-access
		const closeIcon = document.querySelector("." + MENU_SMALL_CLOSE_OUTLINE_CLASS_NAME);
		expect(closeIcon).toBeInTheDocument();
	});

	/**
	 * CASE 4: MENU ITEMS RENDERING
	 * This test verifies that parent and children menu items are 
     * rendered correctly.
	 */
	it("renders parent and children menu items", () => {
		render(<MenuSmallScreen />);

		// Parent items
		expect(screen.getByText("Parent 1")).toBeInTheDocument();
		expect(screen.getByText("Parent 2")).toBeInTheDocument();

		// Children items
		expect(screen.getByText("Child 1")).toBeInTheDocument();
		expect(screen.getByText("Child 2")).toBeInTheDocument();

		// eslint-disable-next-line testing-library/no-node-access
		const childElements = document.querySelectorAll("." + MENU_SMALL_CHILDREN_ITEM_CLASS_NAME);
		expect(childElements.length).toBe(2);
	});
});