/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingOutlined from "./LoadingOutlined.js";
import {
	CIRCLE_LOADING_OUTLINED_IMAGE_LINK,
	LOADING_OUTLINED_CIRCLE_IMAGE_ALT,
	LOADING_OUTLINED_CIRCLE_IMAGE_CLASS_NAME,
	LOADING_OUTLINED_CLASS_NAME,
	LOADING_OUTLINED_LOGO_IMAGE_ALT,
	LOADING_OUTLINED_LOGO_IMAGE_CLASS_NAME,
	LOGO_LOADING_OUTLINED_IMAGE_LINK,
} from "./const.js";

/**
 * Test suite for the LoadingOutlined component.
 * This suite contains:
 * 1. A test to verify that the component renders the main container.
 * 2. A test to verify that the circle image is rendered correctly.
 * 3. A test to verify that the logo image is rendered correctly.
 */
describe("LoadingOutlined", () => {
	/**
	 * CASE 1: RENDERS MAIN CONTAINER
	 * This test checks that the main container is rendered
	 * with the correct class name.
	 */
	it("renders main container", () => {
		render(<LoadingOutlined />);

		// eslint-disable-next-line testing-library/no-node-access
		const container = document.querySelector(
			"." + LOADING_OUTLINED_CLASS_NAME
		);

		expect(container).toBeInTheDocument();
	});

	/**
	 * CASE 2: RENDERS CIRCLE IMAGE
	 * This test verifies that the rotating circle image
	 * is rendered with correct attributes.
	 */
	it("renders circle image correctly", () => {
		render(<LoadingOutlined />);

		// eslint-disable-next-line testing-library/no-node-access
		const circleImage = document.querySelector(
			"." + LOADING_OUTLINED_CIRCLE_IMAGE_CLASS_NAME
		);

		expect(circleImage).toBeInTheDocument();
		expect(circleImage).toHaveAttribute(
			"src",
			CIRCLE_LOADING_OUTLINED_IMAGE_LINK
		);
		expect(circleImage).toHaveAttribute(
			"alt",
			LOADING_OUTLINED_CIRCLE_IMAGE_ALT
		);
	});

	/**
	 * CASE 3: RENDERS LOGO IMAGE
	 * This test verifies that the logo image
	 * is rendered with correct attributes.
	 */
	it("renders logo image correctly", () => {
		render(<LoadingOutlined />);

		// eslint-disable-next-line testing-library/no-node-access
		const logoImage = document.querySelector(
			"." + LOADING_OUTLINED_LOGO_IMAGE_CLASS_NAME
		);

		expect(logoImage).toBeInTheDocument();
		expect(logoImage).toHaveAttribute(
			"src",
			LOGO_LOADING_OUTLINED_IMAGE_LINK
		);
		expect(logoImage).toHaveAttribute(
			"alt",
			LOADING_OUTLINED_LOGO_IMAGE_ALT
		);
	});
});
