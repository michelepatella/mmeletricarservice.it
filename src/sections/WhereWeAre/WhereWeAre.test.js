/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import WhereWeAre from "./WhereWeAre.js";
import {
	WHERE_WE_ARE_GOOGLE_MAPS_CONTAINER_CLASS_NAME,
	WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_CLASS_NAME,
	WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_TITLE,
	WHERE_WE_ARE_GOOGLE_MAPS_LINK,
	WHERE_WE_ARE_GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION,
	WHERE_WE_ARE_TITLE,
	WHERE_WE_ARE_WORKING_HOURS_DESCRIPTION,
	WHERE_WE_ARE_WORKING_HOURS_TITLE,
} from "./const.js";
import {
	CUSTOM_TEXT_TYPES,
	DOTTED_BACKGROUND_IMAGE_LINK,
	SITE,
	WHERE_WE_ARE_SECTION_ID,
} from "../../utils/const.js";
import { getGoogleMapsUnavailableDescriptionStyle } from "./style-handler.js";

// Mocks
jest.mock(
	"../../components/SectionBackground/SectionBackground.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children, image }) => (
			<div
				data-testid="section-background"
				data-image={image}
			>
				{children}
			</div>
		)),
	})
);
jest.mock(
	"../../components/SectionContainer/SectionContainer.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children, id }) => (
			<div data-testid="section-container" id={id}>
				{children}
			</div>
		)),
	})
);
jest.mock(
	"../../components/CustomText/CustomText.js",
	() => ({
		__esModule: true,
		default: jest.fn(
			({ type, text, disableAnimation, style }) => (
				<div
					data-testid={"custom-text-" + type}
					data-disableanimation={disableAnimation}
					data-style={JSON.stringify(style)}
				>
					{text}
				</div>
			)
		),
	})
);
jest.mock(
	"../../components/BlockQuote/BlockQuote.js",
	() => ({
		__esModule: true,
		default: jest.fn(({ children }) => (
			<div data-testid="block-quote">{children}</div>
		)),
	})
);

/**
 * Test suite for the WhereWeAre component.
 * The suite contains:
 * 1. A test to verify that all main components render correctly
 *    with the expected content.
 * 2. A test to check that the Google Maps iframe is rendered when
 *    cookies are accepted, and the unavailable description is not present.
 * 3. A test to ensure that when cookies are not accepted, the Google Maps
 *    iframe is not rendered, and the unavailable description is displayed.
 */
describe("WhereWeAre", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: RENDERING MAIN COMPONENTS
	 * Should render background, container, section title,
	 * location, working hours title and description.
	 */
	it("should render main components correctly", () => {
		render(<WhereWeAre cookiesAccepted={true} />);

		// Check background
		const background = screen.getByTestId(
			"section-background"
		);
		expect(background.dataset.image).toBe(
			DOTTED_BACKGROUND_IMAGE_LINK
		);

		// Check container
		const container = screen.getByTestId(
			"section-container"
		);
		expect(container.id).toBe(WHERE_WE_ARE_SECTION_ID);

		// Check section title
		const title = screen.getByTestId(
			"custom-text-" + CUSTOM_TEXT_TYPES.SUPER_HEADING
		);
		expect(title.textContent).toBe(WHERE_WE_ARE_TITLE);

		// Check location text
		const location = screen.getAllByTestId(
			"custom-text-" + CUSTOM_TEXT_TYPES.BODY
		)[0];
		expect(location.textContent).toBe(SITE);

		// Check working hours title
		const hoursTitle = screen.getByTestId(
			"custom-text-" + CUSTOM_TEXT_TYPES.HEADING
		);
		expect(hoursTitle.textContent).toBe(
			WHERE_WE_ARE_WORKING_HOURS_TITLE
		);

		// Check working hours description
		const hoursDescription = screen.getAllByTestId(
			"custom-text-" + CUSTOM_TEXT_TYPES.BODY
		)[1];
		expect(hoursDescription.textContent).toBe(
			WHERE_WE_ARE_WORKING_HOURS_DESCRIPTION
		);
	});

	/**
	 * CASE 2: GOOGLE MAPS DISPLAYED WHEN COOKIES ACCEPTED
	 * Should render Google Maps iframe and not the unavailable description.
	 */
	it("should render Google Maps iframe when cookies are accepted", () => {
		render(<WhereWeAre cookiesAccepted={true} />);

		// eslint-disable-next-line testing-library/no-node-access
		const container = screen
			.getByTestId("section-container")
			.querySelector(
				"." + WHERE_WE_ARE_GOOGLE_MAPS_CONTAINER_CLASS_NAME
			);
		expect(container).toBeTruthy();

		// eslint-disable-next-line testing-library/no-node-access
		const iframe = container.querySelector("iframe");
		expect(iframe).toBeTruthy();
		expect(iframe.src).toContain(
			WHERE_WE_ARE_GOOGLE_MAPS_LINK
		);
		expect(iframe.className).toBe(
			WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_CLASS_NAME
		);
		expect(iframe.title).toBe(
			WHERE_WE_ARE_GOOGLE_MAPS_IFRAME_TITLE
		);

		// Google Maps unavailable description should not exist
		const unavailable = screen.queryByText(
			WHERE_WE_ARE_GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION
		);
		expect(unavailable).toBeNull();
	});

	/**
	 * CASE 3: DESCRIPTION DISPLAYED WHEN COOKIES NOT ACCEPTED
	 * Should render placeholder description instead of Google Maps iframe.
	 */
	it("should render Google Maps unavailable description when cookies are not accepted", () => {
		render(<WhereWeAre cookiesAccepted={false} />);

		// eslint-disable-next-line testing-library/no-node-access
		const container = screen
			.getByTestId("section-container")
			.querySelector(
				"." + WHERE_WE_ARE_GOOGLE_MAPS_CONTAINER_CLASS_NAME
			);
		expect(container).toBeTruthy();

		const unavailableDescription = screen.getByText(
			WHERE_WE_ARE_GOOGLE_MAPS_UNAVAILABLE_DESCRIPTION
		);
		expect(unavailableDescription).toBeTruthy();
		expect(unavailableDescription.dataset.style).toBe(
			JSON.stringify(
				getGoogleMapsUnavailableDescriptionStyle()
			)
		);

		// Google Maps iframe should not exist
		// eslint-disable-next-line testing-library/no-node-access
		const iframe = container.querySelector("iframe");
		expect(iframe).toBeNull();
	});
});
