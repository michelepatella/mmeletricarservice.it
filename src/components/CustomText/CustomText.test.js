/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mock
jest.mock(
	"../../hooks/use-intersection-observer.js",
	() => ({
		__esModule: true,
		default: jest.fn(),
	})
);

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomText from "./CustomText.js";
import { CUSTOM_TEXT_CLASS_NAME_PREFIX } from "./const.js";
import useIntersectionObserver from "../../hooks/use-intersection-observer.js";

/**
 * Test suite for the CustomText component.
 * This suite contains:
 * 1. A test to verify that the text is correctly rendered.
 * 2. A test to verify that HTML content is rendered correctly.
 * 3. A test to verify that the correct className is applied.
 * 4. A test to verify that the intersection observer hook is called.
 */
describe("CustomText", () => {
	/**
	 * CASE 1: RENDERS TEXT
	 * This test checks that the component correctly renders the provided text.
	 */
	it("renders text correctly", () => {
		render(<CustomText text="Some text" type="body" />);

		expect(
			screen.getByText("Some text")
		).toBeInTheDocument();
	});

	/**
	 * CASE 2: RENDERS HTML CONTENT
	 * This test verifies that HTML content passed as text is rendered correctly.
	 */
	it("renders HTML content correctly", () => {
		render(
			<CustomText
				text="<strong>Bold text</strong>"
				type="body"
			/>
		);

		expect(
			screen.getByText("Bold text")
		).toBeInTheDocument();
	});

	/**
	 * CASE 3: CLASS NAME
	 * This test verifies that the correct className is applied based on type.
	 */
	it("applies correct className", () => {
		render(<CustomText text="Some text" type="heading" />);

		expect(screen.getByText("Some text")).toHaveClass(
			CUSTOM_TEXT_CLASS_NAME_PREFIX + "heading"
		);
	});

	/**
	 * CASE 4: INTERSECTION OBSERVER HOOK
	 * This test verifies that the intersection observer hook is called.
	 */
	it("calls useIntersectionObserver", () => {
		render(<CustomText text="Some text" type="body" />);

		expect(useIntersectionObserver).toHaveBeenCalled();
	});
});
