/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs.js";
import {
	ABOUT_US_BACKGROUND_IMAGE_LINK,
	ABOUT_US_DESCRIPTION,
	ABOUT_US_TITLE,
} from "./const.js";
import { ABOUT_US_SECTION_ID, CUSTOM_TEXT_TYPES } from "../../utils/const.js";

// Mocks
jest.mock("../../components/SectionBackground/SectionBackground.js", () => ({
	__esModule: true,
	default: jest.fn(({ children, image }) => (
		<div data-testid="section-background" data-image={image}>
			{children}
		</div>
	)),
}));
jest.mock("../../components/SectionContainer/SectionContainer.js", () => ({
	__esModule: true,
	default: jest.fn(({ children, id, custStyle }) => (
		<div data-testid="section-container" id={id} data-custstyle={custStyle}>
			{children}
		</div>
	)),
}));
jest.mock("../../components/CustomText/CustomText.js", () => ({
	__esModule: true,
	default: jest.fn(({ type, text, disableAnimation }) => (
		<div data-testid={"custom-text-" + type} data-disableanimation={disableAnimation}>
			{text}
		</div>
	)),
}));

/**
 * Test suite for the AboutUs component.
 * The test suite contains:
 * 1. A test to verify that the component renders correctly with
 *    all main elements (background, container, title, and description).
 */
describe("AboutUs", () => {

    // Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: RENDERING
	 * Should render AboutUs component with all main elements.
	 */
	it("should render with correct background, container, and texts", () => {
		render(<AboutUs />);

		// Check background image
		const background = screen.getByTestId("section-background");
		expect(background.dataset.image).toBe(ABOUT_US_BACKGROUND_IMAGE_LINK);

		// Check section container id
		const container = screen.getByTestId("section-container");
		expect(container.id).toBe(ABOUT_US_SECTION_ID);

		// Check title text
		const title = screen.getByTestId("custom-text-" + CUSTOM_TEXT_TYPES.SUPER_HEADING);
		expect(title.textContent).toBe(ABOUT_US_TITLE);
		expect(title.dataset.disableanimation).toBe("true");

		// Check description text
		const description = screen.getByTestId("custom-text-" + CUSTOM_TEXT_TYPES.BODY);
		expect(description.textContent).toBe(ABOUT_US_DESCRIPTION);
	});
});