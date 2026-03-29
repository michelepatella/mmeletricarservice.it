/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeContent from "./HomeContent.js";
import {
	COMPANY_LOGO_LINK,
	HOME_LOGO_ALT,
	HOME_LOGO_CLASS_NAME,
	HOME_SUBTITLE,
	HOME_SUBTITLE_CLASS_NAME,
	HOME_TITLE,
	HOME_TITLE_CLASS_NAME,
} from "./const.js";

/**
 * Test suite for the HomeContent component.
 * The test suite contains:
 * 1. A test to verify that the logo is rendered with correct src, alt, and class.
 * 2. A test to verify that the title is rendered with correct HTML and class.
 * 3. A test to verify that the subtitle is rendered with correct HTML and class.
 */
describe("HomeContent", () => {
	/**
	 * CASE 1: LOGO RENDERING
	 * Should render the logo with correct src, alt, and class.
	 */
	it("should render the logo correctly", () => {
		render(<HomeContent />);

		const logo = screen.getByAltText(HOME_LOGO_ALT);

		expect(logo).toBeInTheDocument();
		expect(logo.src).toContain(COMPANY_LOGO_LINK);
		expect(logo.className).toBe(HOME_LOGO_CLASS_NAME);
	});

	/**
	 * CASE 2: TITLE RENDERING
	 * Should render the title with correct HTML and class.
	 */
	it("should render the title correctly", () => {
		render(<HomeContent />);

		const title = screen.getByRole("heading", { level: 1 });

		expect(title).toBeInTheDocument();
		expect(title.className).toBe(HOME_TITLE_CLASS_NAME);
		expect(title.innerHTML).toBe(HOME_TITLE);
	});

	/**
	 * CASE 3: SUBTITLE RENDERING
	 * Should render the subtitle with correct HTML and class.
	 */
	it("should render the subtitle correctly", () => {
		render(<HomeContent />);

		const subtitle = screen.getByRole("heading", {
			level: 2,
		});

		expect(subtitle).toBeInTheDocument();
		expect(subtitle.className).toBe(
			HOME_SUBTITLE_CLASS_NAME
		);
		expect(subtitle.innerHTML).toBe(HOME_SUBTITLE);
	});
});
