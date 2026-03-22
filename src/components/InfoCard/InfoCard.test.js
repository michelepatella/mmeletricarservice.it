/**
 * @jest-environment jsdom
 */

/* eslint-disable import/first */

// Mocks
jest.mock("../CustomText/CustomText.js", () => ({
	__esModule: true,
	default: ({ text, type }) => <span data-type={type}>{text}</span>,
}));
jest.mock('../../utils/contact-handlers/contact-handlers.js', () => ({}));

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoCard from "./InfoCard.js";
import {
	INFO_CARD_CLASS_NAME,
	INFO_CARD_FLEX_CLASS_NAME,
	INFO_CARD_ICON_ALT,
	INFO_CARD_ICON_CLASS_NAME,
} from "./const.js";
import { CUSTOM_TEXT_TYPES } from "../../utils/const.js";
import * as styleHandler from "./style-handler.js";

// Spy
jest.spyOn(styleHandler, "getInfoCardTitleStyle").mockReturnValue({});
jest.spyOn(styleHandler, "getInfoCardDescriptionStyle").mockReturnValue({});

/**
 * Test suite for the InfoCard component.
 * This suite contains:
 * 1. A test to verify that the card renders the global container and flex container.
 * 2. A test to verify that the icon renders correctly when provided.
 * 3. A test to verify that the title and description are rendered with correct props.
 */
describe("InfoCard", () => {

	// Define behavior before all tests
	beforeAll(() => {
		const rootDiv = document.createElement("div");
		rootDiv.id = "root";
		document.body.appendChild(rootDiv);
	});

	/**
	 * CASE 1: RENDERS CARD CONTAINERS
	 * This test checks that the card renders its global and flex container.
	 */
	it("renders card containers correctly", () => {
		render(
			<InfoCard title="Test title" description="Test description" />
		);

		// eslint-disable-next-line testing-library/no-node-access
		const card = document.querySelector("." + INFO_CARD_CLASS_NAME);
		// eslint-disable-next-line testing-library/no-node-access
		const flex = document.querySelector("." + INFO_CARD_FLEX_CLASS_NAME);

		expect(card).toBeInTheDocument();
		expect(flex).toBeInTheDocument();
	});

	/**
	 * CASE 2: RENDERS ICON
	 * This test verifies that the icon is rendered when an icon URL is provided.
	 */
	it("renders icon when provided", () => {
		render(
			<InfoCard
				title="Test title"
				description="Test description"
				icon="test-icon.png"
			/>
		);

		// eslint-disable-next-line testing-library/no-node-access
		const icon = document.querySelector("." + INFO_CARD_ICON_CLASS_NAME);

		expect(icon).toBeInTheDocument();
		expect(icon).toHaveAttribute("src", "test-icon.png");
		expect(icon).toHaveAttribute("alt", INFO_CARD_ICON_ALT);
	});

	/**
	 * CASE 3: RENDERS TITLE AND DESCRIPTION
	 * This test verifies that the title and description texts are rendered
	 * via the CustomText component with correct types.
	 */
	it("renders title and description correctly", () => {
		render(
			<InfoCard
				title="Test title"
				description="Test description"
			/>
		);

		const title = screen.getByText("Test title");
		const description = screen.getByText("Test description");

		expect(title).toBeInTheDocument();
		expect(title.dataset.type).toBe(CUSTOM_TEXT_TYPES.SUBHEADING);

		expect(description).toBeInTheDocument();
		expect(description.dataset.type).toBe(CUSTOM_TEXT_TYPES.BODY);
	});
});