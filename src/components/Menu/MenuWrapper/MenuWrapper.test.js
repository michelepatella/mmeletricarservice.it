/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock("../MenuSmallScreen/MenuSmallScreen.js", () => ({
	__esModule: true,
	default: () => <div data-testid="menu-small-screen">Mocked MenuSmallScreen</div>,
}));
jest.mock("../MenuBigScreen/MenuBigScreen.js", () => ({
	__esModule: true,
	default: () => <div data-testid="menu-big-screen">Mocked MenuBigScreen</div>,
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuWrapper from "./MenuWrapper.js";

/**
 * Test suite for the MenuWrapper component.
 * This suite contains:
 * 1. A test to verify that the big screen menu is rendered.
 * 2. A test to verify that the small screen menu is rendered.
 */
describe("MenuWrapper", () => {

	/**
	 * CASE 1: RENDERS BIG SCREEN MENU
	 * This test verifies that the MenuBigScreen component
	 * is rendered inside the wrapper.
	 */
	it("renders the big screen menu", () => {
		render(<MenuWrapper />);

		const bigMenu = screen.getByTestId("menu-big-screen");

		expect(bigMenu).toBeInTheDocument();
		expect(bigMenu).toHaveTextContent("Mocked MenuBigScreen");
	});

	/**
	 * CASE 2: RENDERS SMALL SCREEN MENU
	 * This test verifies that the MenuSmallScreen component
	 * is rendered inside the wrapper.
	 */
	it("renders the small screen menu", () => {
		render(<MenuWrapper />);

		const smallMenu = screen.getByTestId("menu-small-screen");
        
		expect(smallMenu).toBeInTheDocument();
		expect(smallMenu).toHaveTextContent("Mocked MenuSmallScreen");
	});
});