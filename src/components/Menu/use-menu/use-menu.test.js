/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

import React, { useEffect } from "react";
import {
	render,
	act,
	waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { useMenu } from "./use-menu.js";

// Mock
jest.mock("../const.js", () => ({
	ALL_MENU_SECTIONS: [
		{
			id: "section-1",
			title: "Section 1",
			children: [
				{ id: "child-1", title: "Child 1" },
				{ id: "child-2", title: "Child 2" },
			],
		},
		{
			id: "section-2",
			title: "Section 2",
			children: [],
		},
	],
}));

/**
 * Wrapper component to test the hook behavior
 * in a React component environment.
 * @param callback — Function to receive hook values.
 */
function TestHookComponent({ callback }) {
	const hook = useMenu();

	// Pass hook values to the test callback
	useEffect(() => {
		callback(hook);
	}, [hook, callback]);

	return <div>Hook Test Component</div>;
}

/**
 * Test suite for useMenu hook.
 * This suite contains:
 * 1. Initial state validation.
 * 2. toggleDrawer functionality.
 * 3. Menu item onClick behavior.
 * 4. Children menu item onClick behavior.
 * 5. Child section priority in section detection.
 */
describe("useMenu", () => {
	/**
	 * CASE 1: INITIAL STATE
	 * The hook should initialize with:
	 * - visible = false
	 * - section = first section's id
	 * - menuItems correctly mapped with children
	 */
	it("should initialize state correctly", () => {
		let hookValues = null;

		render(
			<TestHookComponent
				callback={(hook) => (hookValues = hook)}
			/>
		);

		// Check visibility and section
		expect(hookValues.visible).toBe(false);
		expect(hookValues.section).toBe("section-1");

		// Verify first menu item mapping
		expect(hookValues.menuItems[0].key).toBe(1);
		expect(hookValues.menuItems[0].href).toBe("#section-1");
		expect(hookValues.menuItems[0].title).toBe("Section 1");

		// Verify children mapping
		// eslint-disable-next-line testing-library/no-node-access
		expect(hookValues.menuItems[0].children.length).toBe(2);
		// eslint-disable-next-line testing-library/no-node-access
		expect(hookValues.menuItems[0].children[0].key).toBe(
			"1-1"
		);
		// eslint-disable-next-line testing-library/no-node-access
		expect(hookValues.menuItems[0].children[0].href).toBe(
			"#child-1"
		);
		// eslint-disable-next-line testing-library/no-node-access
		expect(hookValues.menuItems[0].children[0].title).toBe(
			"Child 1"
		);
	});

	/**
	 * CASE 2: TOGGLE DRAWER
	 * The toggleDrawer function should:
	 * - Invert visible state
	 * - Update document.documentElement.style.overflowY
	 */
	it("should toggle drawer visibility correctly", () => {
		let hookValues = null;

		render(
			<TestHookComponent
				callback={(hook) => (hookValues = hook)}
			/>
		);

		// Initially hidden
		expect(hookValues.visible).toBe(false);

		// Open drawer
		act(() => {
			hookValues.toggleDrawer();
		});

		expect(hookValues.visible).toBe(true);
		expect(document.documentElement.style.overflowY).toBe(
			"var(--overflow-hidden)"
		);

		// Close drawer
		act(() => {
			hookValues.toggleDrawer();
		});

		expect(hookValues.visible).toBe(false);
		expect(document.documentElement.style.overflowY).toBe(
			"var(--overflow-auto)"
		);
	});

	/**
	 * CASE 3: MENU ITEM ONCLICK
	 * Each menu item's onClick should:
	 * - Call scrollIntoView on the target section
	 * - Hide the menu (visible = false)
	 * - Restore document scroll
	 */
	it("should handle menu item click correctly", () => {
		let hookValues = null;

		render(
			<TestHookComponent
				callback={(hook) => (hookValues = hook)}
			/>
		);

		// Mock DOM element for scrollIntoView
		const sectionElement = document.createElement("div");
		sectionElement.id = "section-2";
		sectionElement.scrollIntoView = jest.fn();
		document.body.appendChild(sectionElement);

		// Click menu item
		act(() => {
			hookValues.menuItems[1].onClick();
		});

		expect(
			sectionElement.scrollIntoView
		).toHaveBeenCalled();
		expect(hookValues.visible).toBe(false);
		expect(document.documentElement.style.overflowY).toBe(
			"var(--overflow-auto)"
		);
	});

	/**
	 * CASE 4: CHILDREN MENU ITEMS ONCLICK
	 * Children menu items onClick should behave the same as parent items.
	 */
	it("should handle children menu item click correctly", () => {
		let hookValues = null;

		render(
			<TestHookComponent
				callback={(hook) => (hookValues = hook)}
			/>
		);

		// Mock DOM element for child scrollIntoView
		const childElement = document.createElement("div");
		childElement.id = "child-1";
		childElement.scrollIntoView = jest.fn();
		document.body.appendChild(childElement);

		// Click child menu item
		act(() => {
			// eslint-disable-next-line testing-library/no-node-access
			hookValues.menuItems[0].children[0].onClick();
		});

		expect(childElement.scrollIntoView).toHaveBeenCalled();
		expect(hookValues.visible).toBe(false);
		expect(document.documentElement.style.overflowY).toBe(
			"var(--overflow-auto)"
		);
	});

	/**
	 * CASE 5: CHILD SECTION PRIORITY
	 * Should return child section if it is the closest valid match.
	 */
	it("should prioritize child section when it is closest valid match", async () => {
		let hookValues = null;

		Object.defineProperty(window, "innerHeight", {
			writable: true,
			value: 800,
		});

		// Clean DOM
		document.body.innerHTML = "";

		// Parent (not visible enough)
		const parent = document.createElement("div");
		parent.id = "section-1";
		parent.getBoundingClientRect = jest.fn(() => ({
			top: 500,
			bottom: 600,
		}));

		// Child (closer)
		const child = document.createElement("div");
		child.id = "child-1";
		child.getBoundingClientRect = jest.fn(() => ({
			top: 10,
			bottom: 100,
		}));

		document.body.appendChild(parent);
		document.body.appendChild(child);

		render(
			<TestHookComponent
				callback={(hook) => (hookValues = hook)}
			/>
		);

		act(() => {
			window.dispatchEvent(new Event("scroll"));
		});

		await waitFor(() => {
			expect(hookValues.section).toBe("child-1");
		});
	});
});
