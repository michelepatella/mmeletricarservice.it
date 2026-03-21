/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock("./style-handler.js", () => ({
	getSectionBackgroundStyle: jest.fn(),
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionBackground from "./SectionBackground.js";
import { SECTION_BACKGROUND_TEST_ID } from "./const.js";
import { getSectionBackgroundStyle } from "./style-handler.js";

/**
 * Test suite for the SectionBackground component.
 * This suite contains:
 * 1. A test to verify that the component renders correctly with children.
 * 2. A test to verify that the background style is applied correctly.
 */
describe("SectionBackground", () => {

	/**
	 * CASE 1: RENDERS CHILDREN
	 * This test checks that the component correctly renders its children.
	 */
	it("renders children", () => {
		getSectionBackgroundStyle.mockReturnValue({});

		render(
			<SectionBackground image="test.jpg">
				Test content
			</SectionBackground>
		);

		expect(screen.getByText("Test content")).toBeInTheDocument();
	});

	/**
	 * CASE 2: APPLIES BACKGROUND STYLE
	 * This test verifies that the background style returned by the 
	 * handler is applied.
	 */
	it("applies background style correctly", () => {
		getSectionBackgroundStyle.mockReturnValue({
			backgroundImage: "url(test.jpg)",
		});

		render(<SectionBackground image="test.jpg" />);

		const container = screen.getByTestId(SECTION_BACKGROUND_TEST_ID);

		expect(getSectionBackgroundStyle).toHaveBeenCalledWith("test.jpg");
		expect(container).toHaveStyle({
			backgroundImage: "url(test.jpg)",
		});
	});
});