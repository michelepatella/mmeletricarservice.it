import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import MenuSmallScreen from "./MenuSmallScreen";
import { useMenu } from "../../../hooks/useMenu";

// Definition of menu items
const child = [
	{
		key: "section1-1",
		title: "Child 1 Title",
		href: "#section1-1",
		onClick: jest.fn(),
	},
];
const menuItems = [
	{
		key: "section1",
		title: "Section 1 Title",
		href: "#section1",
		onClick: jest.fn(),
		children: [child[0]],
	},
	{
		key: "section2",
		title: "Section 2 Title",
		href: "#section2",
		onClick: jest.fn(),
	},
];

const drawerCloseIconTestId = "drawer-close-icon";

// Mock CloseOutlined
jest.mock("@ant-design/icons", () => {
	const originalModule = jest.requireActual(
		"@ant-design/icons"
	);
	return {
		...originalModule,
		CloseOutlined: (props) => (
			<div data-testid={drawerCloseIconTestId} {...props} />
		),
	};
});

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

			expect(
				screen.getByRole("button")
			).toBeInTheDocument();
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

			fireEvent.click(screen.getByRole("button"));
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

			expect(
				screen.getByRole("dialog")
			).toBeInTheDocument();
		});

		// Test if it renders the drawer
		// with the correct close icon
		test("renders Drawer with correct close icon", () => {
			render(<MenuSmallScreen />);

			expect(
				screen.getByTestId(drawerCloseIconTestId)
			).toBeInTheDocument();
		});

		// Test if toggleDrawer is called
		// whenever the drawer is closed
		test("calls toggleDrawer when Drawer is closed", () => {
			render(<MenuSmallScreen />);

			fireEvent.click(
				screen.getByTestId(drawerCloseIconTestId)
			);
			expect(toggleDrawer).toHaveBeenCalled();
		});
	});

	// Test drawer content
	describe("Drawer content", () => {
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

		// Test if it correctly renders all
		// parent menu items
		test("renders all parent menu items correctly", () => {
			render(<MenuSmallScreen />);

			menuItems.forEach((item) => {
				expect(
					screen.getByText(item.title)
				).toBeInTheDocument();
			});
		});

		// Test if it correctly renders all
		// child menu items
		test("renders all children menu items correctly", () => {
			render(<MenuSmallScreen />);

			child.forEach((item) => {
				expect(
					screen.getByText(item.title)
				).toBeInTheDocument();
			});
		});

		// Test if once each parent menu item is
		// clicked, onClick is called
		test("calls onClick when parent menu items are clicked", () => {
			render(<MenuSmallScreen />);

			menuItems.forEach((item) => {
				fireEvent.click(screen.getByText(item.title));
				expect(item.onClick).toHaveBeenCalled();
			});
		});

		// Test if once each child menu item is
		// clicked, onClick is called
		test("calls onClick when children menu items are clicked", () => {
			render(<MenuSmallScreen />);

			child.forEach((item) => {
				fireEvent.click(screen.getByText(item.title));
				expect(item.onClick).toHaveBeenCalled();
			});
		});
	});
});
