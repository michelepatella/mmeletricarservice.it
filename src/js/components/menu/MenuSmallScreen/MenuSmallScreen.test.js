import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import MenuSmallScreen from "./MenuSmallScreen";
import { useMenu } from "../../../hooks/useMenu";

// Definition of expected results
const menuItems = [
	{
		key: "section1",
		title: "Section 1 Title",
		href: "#section1",
		onClick: jest.fn(),
		children: [
			{
				key: "section1-1",
				title: "Child 1 Title",
				href: "#section1-1",
				onClick: jest.fn(),
			},
		],
	},
	{
		key: "section2",
		title: "Section 2 Title",
		href: "#section2",
		onClick: jest.fn(),
	},
];

// Mock custom hook
jest.mock("../../../hooks/useMenu", () => ({
	useMenu: jest.fn(),
}));

// Mock toggleDrawer
const toggleDrawer = jest.fn();

// Run tests
describe("MenuSmallScreen", () => {
	// Clear all mocks before
	// running each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	// Test hamburger button
	describe("Hamburger button", () => {
		// Mock custom hook before
		// running each test
		beforeEach(() => {
			useMenu.mockReturnValue({
				menuItems,
				section: menuItems[0].key,
				visible: false,
				toggleDrawer,
			});
		});

		// Test if it correctly renders the
		// hamburger button which through the menu is open
		test("renders hamburger button correctly", () => {
			render(<MenuSmallScreen />);

			const hamburgerButton = screen.getByRole("button");

			expect(hamburgerButton).toBeInTheDocument();
		});

		// Test if the hamburger button
		// renders the icon correctly
		test("renders the hamburger button's icon correctly", () => {
			render(<MenuSmallScreen />);

			const icon = screen.getByRole("img", {
				hidden: true,
			});

			expect(icon).toBeInTheDocument();
		});

		// Test if, once the hamburger button is clicked,
		// toggleDrawer is called
		test("calls toggleDrawer when hamburger button is clicked", () => {
			render(<MenuSmallScreen />);

			const hamburgerButton = screen.getByRole("button");

			fireEvent.click(hamburgerButton);
			expect(toggleDrawer).toHaveBeenCalled();
		});
	});

	// Test Drawer
	describe("Drawer", () => {
		// Mock custom hook before
		// running each test
		beforeEach(() => {
			useMenu.mockReturnValueOnce({
				menuItems,
				section: menuItems[0].key,
				visible: true,
				toggleDrawer,
			});
		});

		// Test if it correctly renders the
		// Drawer when visible
		test("renders Drawer when visible", () => {
			render(<MenuSmallScreen />);

			const drawer = screen.getByRole("dialog");
			expect(drawer).toBeInTheDocument();
		});

		// Test if it renders the drawer
		// with the correct close icon
		test("renders Drawer with correct close icon", () => {
			render(<MenuSmallScreen />);

			const closeIcon = screen.getByTestId(
				"drawer-close-icon"
			);

			expect(closeIcon).toBeInTheDocument();
		});

		// Test if toggleDrawer is called
		// whenever the drawer is closed
		test("calls toggleDrawer when Drawer is closed", () => {
			render(<MenuSmallScreen />);

			const closeIcon = screen.getByTestId(
				"drawer-close-icon"
			);
			fireEvent.click(closeIcon);

			expect(toggleDrawer).toHaveBeenCalled();
		});
	});
});
