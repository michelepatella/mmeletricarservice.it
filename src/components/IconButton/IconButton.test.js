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
import IconButton from "./IconButton.js";
import { ICON_BUTTON_IMAGE_ALT } from "./const.js";

/**
 * Test suite for the IconButton component.
 * This suite contains:
 * 1. A test to verify that the button is rendered correctly.
 * 2. A test to verify that the image is rendered with correct src and alt.
 * 3. A test to verify that clicking the button triggers the onClick handler.
 */
describe("IconButton", () => {
	/**
	 * CASE 1: RENDERS BUTTON
	 * This test checks that the button is rendered correctly.
	 */
	it("renders button correctly", () => {
		render(
			<IconButton src="test.png" onClick={jest.fn()} />
		);

		// eslint-disable-next-line testing-library/no-node-access
		const button = document.querySelector("button");

		expect(button).toBeInTheDocument();
	});

	/**
	 * CASE 2: RENDERS IMAGE
	 * This test verifies that the image is rendered with correct src and alt.
	 */
	it("renders image with correct src and alt", () => {
		render(
			<IconButton src="test.png" onClick={jest.fn()} />
		);

		const image = screen.getByAltText(
			ICON_BUTTON_IMAGE_ALT
		);

		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", "test.png");
	});

	/**
	 * CASE 3: BUTTON CLICK
	 * This test verifies that clicking the button triggers the onClick handler.
	 */
	it("calls onClick when button is clicked", () => {
		const mockClick = jest.fn();

		render(
			<IconButton src="test.png" onClick={mockClick} />
		);

		// eslint-disable-next-line testing-library/no-node-access
		const button = document.querySelector("button");

		fireEvent.click(button);

		expect(mockClick).toHaveBeenCalled();
	});
});
