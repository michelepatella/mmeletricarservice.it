/**
 * @jest-environment jsdom
 */

import React from "react";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import CookieButton from "./CookieButton.js";
import { onCookieButtonClick } from "./handler/handler.js";

// Mock
jest.mock("./handler/handler.js", () => ({
	onCookieButtonClick: jest.fn(),
}));

/**
 * Test suite for the CookieButton component.
 * This suite contains:
 * 1. A test to check if the button renders with correct aria-label.
 * 2. A test to check if clicking the button calls the handler.
 */
describe("CookieButton", () => {
	/**
	 * CASE 1: RENDERS BUTTON WITH ARIA-LABEL
	 * This test checks if the CookieButton renders with the correct aria-label.
	 */
	it("renders the button with correct aria-label", () => {
		render(
			<CookieButton setIsCookiesBannerVisible={jest.fn()} />
		);
		const button = screen.getByRole("button", {
			name: /cookie/i,
		});
		expect(button).toBeInTheDocument();
	});

	/**
	 * CASE 2: BUTTON CLICK CALLS HANDLER
	 * This test verifies that clicking the CookieButton calls onCookieButtonClick handler.
	 */
	it("calls onCookieButtonClick handler when clicked", () => {
		const mockSetIsVisible = jest.fn();
		render(
			<CookieButton
				setIsCookiesBannerVisible={mockSetIsVisible}
			/>
		);
		const button = screen.getByRole("button", {
			name: /cookie/i,
		});

		fireEvent.click(button);

		expect(onCookieButtonClick).toHaveBeenCalledWith(
			mockSetIsVisible
		);
	});
});
