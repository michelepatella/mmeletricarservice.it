/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home.js";
import {
	HOME_CONTENT_CLASS_NAME,
	HOME_HEADER_CLASS_NAME,
	HOME_LAYOUT_CLASS_NAME,
} from "./const.js";
import {
    DOTTED_BACKGROUND_IMAGE_LINK,
} from "../../../utils/const.js";
import { HOME_SECTION_ID } from "../../../utils/const.js";

// Mocks
jest.mock("antd", () => {
	const Layout = ({ children, className, id }) => (
		<div data-testid="layout" className={className} id={id}>
			{children}
		</div>
	);
	Layout.Header = ({ children, className }) => (
		<div data-testid="layout-header" className={className}>
			{children}
		</div>
	);
	Layout.Content = ({ children, className }) => (
		<div data-testid="layout-content" className={className}>
			{children}
		</div>
	);

	return { Layout };
});
jest.mock("../HomeHeader/HomeHeader.js", () => ({
	__esModule: true,
	default: jest.fn(() => <div data-testid="home-header" />),
}));
jest.mock("../HomeContent/HomeContent.js", () => ({
	__esModule: true,
	default: jest.fn(() => <div data-testid="home-content" />),
}));
jest.mock("../../../components/SectionBackground/SectionBackground.js", () => ({
	__esModule: true,
	default: jest.fn(({ children, image }) => (
		<div data-testid="section-background" data-image={image}>
			{children}
		</div>
	)),
}));

/**
 * Test suite for the Home component.
 * The test suite contains:
 * 1. A test to verify that the layout renders correctly.
 * 2. A test to verify that header and content are rendered correctly.
 * 3. A test to verify that the section background is rendered with correct image.
 */
describe("Home", () => {

	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: LAYOUT RENDERING
	 * Should render layout with correct class and id.
	 */
	it("should render layout correctly", () => {
		render(<Home />);

		const layout = screen.getByTestId("layout");

		expect(layout.className).toBe(HOME_LAYOUT_CLASS_NAME);
		expect(layout.id).toBe(HOME_SECTION_ID);
	});

	/**
	 * CASE 2: HEADER AND CONTENT RENDERING
	 * Should render header and content with correct classes
	 * and include corresponding components.
	 */
	it("should render header and content correctly", () => {
		render(<Home />);

		// Check header
		const header = screen.getByTestId("layout-header");
		expect(header.className).toBe(HOME_HEADER_CLASS_NAME);
		expect(screen.getByTestId("home-header")).toBeInTheDocument();

		// Check content
		const content = screen.getByTestId("layout-content");
		expect(content.className).toBe(HOME_CONTENT_CLASS_NAME);
		expect(screen.getByTestId("home-content")).toBeInTheDocument();
	});

	/**
	 * CASE 3: SECTION BACKGROUND
	 * Should render section background with correct image.
	 */
	it("should render section background with correct image", () => {
		render(<Home />);

		const background = screen.getByTestId("section-background");
		expect(background).toBeInTheDocument();
		expect(background.dataset.image).toBe(DOTTED_BACKGROUND_IMAGE_LINK);
	});
});