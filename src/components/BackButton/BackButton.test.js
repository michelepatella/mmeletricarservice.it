/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackButton from "./BackButton.js";
import { BACK_BUTTON_LABEL } from "./const.js";

// Mocks
jest.mock("../../utils/const.js", () => ({
	CUSTOM_TEXT_TYPES: {
		BODY: "body",
	},
}));
jest.mock("../CustomText/CustomText.js", () => (props) => {
	return <span>{props.text}</span>;
});

/**
 * Test suite for the BackButton component.
 * This suite includes tests to verify that the component:
 * 1. Renders without crashing.
 * 2. Displays the correct label.
 * 3. Contains an SVG icon.
 */
describe("BackButton", () => {
	/**
	 * CASE 1: RENDERS WITHOUT CRASHING
	 * This test ensures that the BackButton component can be
	 * rendered without throwing any errors.
	 */
	it("renders without crashing", () => {
		render(<BackButton />);
	});

	/**
	 * CASE 2: RENDERS THE CORRECT LABEL
	 * This test checks that the BackButton component
	 * displays the correct label.
	 */
	it("renders the correct label", () => {
		render(<BackButton />);
		expect(
			screen.getByText(BACK_BUTTON_LABEL)
		).toBeInTheDocument();
	});

	/**
	 * CASE 3: RENDERS THE ICON
	 * This test verifies that the BackButton component
	 * includes an SVG icon in its rendered output.
	 */
	it("renders the icon", () => {
		const { container } = render(<BackButton />);
		// eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
		expect(
			container.querySelector("svg")
		).toBeInTheDocument();
	});
});
