/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Services from "./Services.js";
import {
	ALL_SERVICES,
	SERVICES_BACKGROUND_IMAGE_LINK,
} from "./const.js";
import { SERVICES_SECTION_ID, CUSTOM_TEXT_TYPES } from "../../utils/const.js";
import { useInView } from "react-intersection-observer";
import { useServiceTitleAnimation } from "./use-service-title-animation/use-service-title-animation.js";

// Mocks
jest.mock("react-intersection-observer", () => ({
	useInView: jest.fn(),
}));
jest.mock("./use-service-title-animation/use-service-title-animation.js", () => ({
	useServiceTitleAnimation: jest.fn(),
}));
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
	default: jest.fn(({ children, id }) => (
		<div data-testid="section-container" id={id}>
			{children}
		</div>
	)),
}));
jest.mock("../../components/CustomText/CustomText.js", () => ({
	__esModule: true,
	default: jest.fn(({ type, text }) => (
		<div data-testid={"custom-text-" + type}>{text}</div>
	)),
}));
jest.mock("../../components/InfoCard/InfoCard.js", () => ({
	__esModule: true,
	default: jest.fn(({ title, description }) => (
		<div data-testid={"info-card-" + title}>
			{title} - {description}
		</div>
	)),
}));

/**
 * Test suite for the Services component.
 * This test suite contains:
 * 1. A test to verify correct rendering of main components.
 * 2. A test to verify that all services are rendered as InfoCards.
 * 3. A test to verify that hooks are called correctly.
 */
describe("Services", () => {

	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();

		useInView.mockReturnValue({
			ref: jest.fn(),
			inView: true,
		});
	});

	/**
	 * CASE 1: MAIN COMPONENTS RENDERING
	 * Should render background, container and title.
	 */
	it("should render main components correctly", () => {
		render(<Services />);

		// Check background
		const background = screen.getByTestId("section-background");
		expect(background.dataset.image).toBe(SERVICES_BACKGROUND_IMAGE_LINK);

		// Check container
		const container = screen.getByTestId("section-container");
		expect(container.id).toBe(SERVICES_SECTION_ID);

		// Check title
		expect(
			screen.getByTestId("custom-text-" + CUSTOM_TEXT_TYPES.SUPER_HEADING)
		).toBeInTheDocument();
	});

	/**
	 * CASE 2: INFO CARDS RENDERING
	 * Should render one InfoCard for each service.
	 */
	it("should render all services as info cards", () => {
		render(<Services />);

		ALL_SERVICES.forEach((service) => {
			expect(
				screen.getByTestId("info-card-" + service.title)
			).toBeInTheDocument();
		});
	});

	/**
	 * CASE 3: HOOKS CALLING
	 * Should call useInView and useServiceTitleAnimation correctly.
	 */
	it("should call hooks correctly", () => {
		render(<Services />);

		expect(useInView).toHaveBeenCalled();

		expect(useServiceTitleAnimation).toHaveBeenCalledWith(
			true,
			expect.any(Function),
			expect.any(Function)
		);
	});
});