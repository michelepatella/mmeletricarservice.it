/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeHeader from "./HomeHeader.js";
import { HOME_HEADER_CONTACT_BUTTONS } from "./const.js";
import IconButton from "../../../components/IconButton/IconButton.js";

// Mock
jest.mock(
	"../../../components/IconButton/IconButton.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ src, onClick }) => (
			<button
				data-testid={"icon-button-" + src}
				onClick={onClick}
			>
				{src}
			</button>
		)),
	})
);

/**
 * Test suite for the HomeHeader component.
 * The test suite contains:
 * 1. A test to verify that an IconButton is rendered for each contact
 *    with the correct props.
 */
describe("HomeHeader", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: ICON BUTTONS RENDERING
	 * Should render an IconButton for each contact with correct props.
	 */
	it("should render all icon buttons correctly", () => {
		render(<HomeHeader />);

		HOME_HEADER_CONTACT_BUTTONS.forEach(
			({ src, onClick }) => {
				// Check presence
				const button = screen.getByTestId(
					"icon-button-" + src
				);
				expect(button).toBeInTheDocument();

				// Check displayed src
				expect(button.textContent).toBe(src);

				// Check onClick
				expect(IconButton).toHaveBeenCalledWith(
					expect.objectContaining({
						src,
						onClick,
					}),
					undefined
				);
			}
		);
	});
});
