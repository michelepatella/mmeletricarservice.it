/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock("antd", () => ({
	Anchor: ({ items, getCurrentAnchor }) => (
		<div>
			<span data-testid="anchor-items">
				{JSON.stringify(items)}
			</span>
			<span data-testid="current-anchor">
				{getCurrentAnchor()}
			</span>
		</div>
	),
}));
jest.mock("../use-menu/use-menu.js", () => ({
	useMenu: jest.fn(),
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuBigScreen from "./MenuBigScreen.js";
import { MENU_BIG_CONTAINER_CLASS_NAME } from "./const.js";
import { useMenu } from "../use-menu/use-menu.js";

/**
 * Test suite for the MenuBigScreen component.
 * This suite contains:
 * 1. A test to verify that the container is rendered correctly.
 * 2. A test to verify that menu items are passed to the Anchor component.
 * 3. A test to verify that the current anchor is computed correctly.
 */
describe("MenuBigScreen", () => {

	/**
	 * CASE 1: RENDERS CONTAINER
	 * This test checks that the main container is rendered
	 * with the correct class name.
	 */
	it("renders container correctly", () => {
		useMenu.mockReturnValue({
			menuItems: [],
			section: "home",
		});

		render(<MenuBigScreen />);

		// eslint-disable-next-line testing-library/no-node-access
		const container = document.querySelector("." + MENU_BIG_CONTAINER_CLASS_NAME);

		expect(container).toBeInTheDocument();
	});

	/**
	 * CASE 2: PASSES MENU ITEMS TO ANCHOR
	 * This test verifies that menu items are passed correctly
	 * to the Anchor component.
	 */
	it("passes menu items correctly", () => {
		const mockItems = [{ key: "1", href: "#home", title: "Home" }];

		useMenu.mockReturnValue({
			menuItems: mockItems,
			section: "home",
		});

		render(<MenuBigScreen />);

		expect(screen.getByTestId("anchor-items")).toHaveTextContent(
			JSON.stringify(mockItems)
		);
	});

	/**
	 * CASE 3: COMPUTES CURRENT ANCHOR
	 * This test verifies that the current anchor is computed correctly.
	 */
	it("computes current anchor correctly", () => {
		useMenu.mockReturnValue({
			menuItems: [],
			section: "about-us",
		});

		render(<MenuBigScreen />);

		expect(screen.getByTestId("current-anchor")).toHaveTextContent("#about-us");
	});
});