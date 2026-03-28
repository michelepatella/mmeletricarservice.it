/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UsedCarDrawerCarousel from "./UsedCarDrawerCarousel";
import { NO_USED_CAR_IMAGE_AVAILABLE_LINK } from "./const.js";

// Mock
jest.mock("antd", () => {
    const React = require("react");
    
	return {
		Carousel: ({ children }) =>
			React.createElement(
				"div",
				{ "data-testid": "carousel" },
				children
			),
		Image: Object.assign(
			({ src }) =>
				React.createElement("img", {
					"data-testid": "car-image",
					src,
				}),
			{
				PreviewGroup: ({ children }) =>
					React.createElement(
						"div",
						{ "data-testid": "preview-group" },
						children
					),
			}
		),
	};
});

/**
 * Test suite for UsedCarDrawerCarousel component.
 * The test suite contains:
 * 1. A test to verify images are rendered when available.
 * 2. A test to verify fallback image is shown when no images exist.
 */
describe("UsedCarDrawerCarousel", () => {

	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: IMAGES AVAILABLE
	 * Should render all car images inside preview groups.
	 */
	it("should render all images when available", () => {

		render(
			<UsedCarDrawerCarousel
				usedCarInfo={{
					images: [
						"img1.jpg",
						"img2.jpg",
					],
				}}
			/>
		);

		const images = screen.getAllByTestId("car-image");

		expect(images).toHaveLength(2);
		expect(images[0]).toHaveAttribute("src", "img1.jpg");
		expect(images[1]).toHaveAttribute("src", "img2.jpg");
	});

	/**
	 * CASE 2: NO IMAGES AVAILABLE
	 * Should render fallback image when images array is empty or missing.
	 */
	it("should render fallback image when no images are available", () => {

		render(
			<UsedCarDrawerCarousel
				usedCarInfo={{
					images: [],
				}}
			/>
		);

		const image = screen.getByTestId("car-image");

		expect(image).toHaveAttribute(
			"src",
			NO_USED_CAR_IMAGE_AVAILABLE_LINK
		);
	});
});