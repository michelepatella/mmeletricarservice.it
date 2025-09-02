import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MenuBigScreen from "./MenuBigScreen";
import { useMenu } from "../../../hooks/useMenu";

// Definition of menu items
const menuItems = [
	{
		key: "section1",
		href: "#section1",
		title: "Section 1 Title",
	},
	{
		key: "section2",
		href: "#section2",
		title: "Section 2 Title",
	},
];

// Mock custom hook
jest.mock("../../../hooks/useMenu", () => ({
	useMenu: jest.fn(),
}));

// Run tests
describe("MenuBigScreen", () => {
	beforeEach(() => {
		// Clear all mocks before
		// running each test
		jest.clearAllMocks();

		// Mock useMenu (custom hook) before
		// running each test
		useMenu.mockReturnValue({
			menuItems: menuItems,
			menuItemControls: {},
			section: menuItems[0].key, // The current section is assumed to be the first one by default
		});
	});

	// Test if it renders motion.div correctly
	test("renders motion.div correctly", () => {
		render(<MenuBigScreen />);

		const motionDiv = screen.getByRole("region");
		expect(motionDiv).toBeInTheDocument();
	});

	// Test if it renders the menu with the items
	// provided by the custom hook (useMenu)
	test.each(menuItems)(
		"renders the menu with provided items",
		(menuItem) => {
			render(<MenuBigScreen />);

			expect(
				screen.getByText(menuItem.title)
			).toBeInTheDocument();
		}
	);

	// Test if it sets the current section correctly
	// by varying it across all the menu sections
	describe.each(menuItems)(
		"Current section tests",
		(menuItem) => {
			test(
				"sets the current section correctly when section=" +
					menuItem.key,
				() => {
					// Override mock
					useMenu.mockReturnValue({
						menuItems,
						menuItemControls: {},
						section: menuItem.key,
					});

					render(<MenuBigScreen />);

					// Get the anchor item
					const anchor = screen.getByRole("link", {
						name: menuItem.title,
					});

					expect(anchor).toHaveAttribute(
						"href",
						menuItem.href
					);
				}
			);
		}
	);
});
