/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mock
jest.mock("antd", () => ({
	Button: ({ children, ...props }) => (
		<button {...props}>{children}</button>
	),
}));

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomButton from "./CustomButton.js";
import {
	CUSTOM_BUTTON_TYPES,
	CUSTOM_BUTTON_ICON_ALT,
} from "./const.js";

/**
 * Test suite for the CustomButton component.
 * This suite contains:
 * 1. A test to verify that the button renders the correct text.
 * 2. A test to verify that clicking the button triggers the handler.
 * 3. A test to verify that the icon is rendered when provided.
 * 4. A test to verify correct className based on props.
 */
describe("CustomButton", () => {

    /**
     * CASE 1: RENDERS TEXT
     * This test checks that the button correctly renders the provided text.
     */
	it("renders the correct text", () => {
		render(<CustomButton text="Click me" />);

		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

    /**
     * CASE 2: CLICK HANDLER
     * This test verifies that clicking the button triggers the onClick handler.
     */
	it("calls onClick when button is clicked", () => {
		const mockClick = jest.fn();

		render(<CustomButton text="Click me" onClick={mockClick} />);

		fireEvent.click(screen.getByText("Click me"));

		expect(mockClick).toHaveBeenCalled();
	});

    /**
     * CASE 3: RENDERS ICON
     * This test verifies that the icon is rendered when provided.
     */
	it("renders icon when provided", () => {
		render(
			<CustomButton text="Click me" icon="test-icon.png" />
		);

		expect(
			screen.getByAltText(CUSTOM_BUTTON_ICON_ALT)
		).toBeInTheDocument();
	});

    /**
     * CASE 4: CLASS NAME LOGIC
     * This test verifies that the correct className is applied 
	 * based on isContact and isCta props.
     */
	it("applies correct className based on props", () => {
		const { rerender } = render(
			<CustomButton text="Click me" />
		);

		// General, custom button
		expect(screen.getByText("Click me")).toHaveClass(
			CUSTOM_BUTTON_TYPES.GENERAL
		);

		// Contact button
		rerender(
			<CustomButton text="Click me" isContact />
		);
		expect(screen.getByText("Click me")).toHaveClass(
			CUSTOM_BUTTON_TYPES.CONTACT
		);

		// CTA button
		rerender(
			<CustomButton text="Click me" isContact isCta />
		);
		expect(screen.getByText("Click me")).toHaveClass(
			CUSTOM_BUTTON_TYPES.CTA
		);
	});
});