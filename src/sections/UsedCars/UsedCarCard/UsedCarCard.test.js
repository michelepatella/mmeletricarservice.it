/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import UsedCarCard from "./UsedCarCard";
import * as handler from "../handler/handler.js";
import { USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION } from "./const.js";
import { onUsedCarDrawerOpen } from "../handler/handler.js";

// Mocks
jest.mock("src/index.js", () => ({}), { virtual: true });
jest.mock("@vercel/analytics/react", () => ({}), {
	virtual: true,
});
jest.mock("react-router-dom", () => ({}), {
	virtual: true,
});
jest.mock(
	"./use-open-used-car-drawer-from-url/use-open-used-car-drawer-from-url.js",
	() => ({
		useOpenUsedCarDrawerFromUrl: jest.fn(),
	})
);
jest.mock(
	"../UsedCarDrawer/UsedCarDrawer/UsedCarDrawer.js",
	() => ({
		__esModule: true,
		default: () => <div data-testid="used-car-drawer" />,
	})
);
jest.mock("./const.js", () => ({
	USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION:
		"unavaiable-image-description",
}));

// Spy
jest.spyOn(handler, "onUsedCarDrawerOpen");

/**
 * Test suite for UsedCarCard component.
 * The test suite contains:
 * 1. A test to verify that the card renders correctly.
 * 2. A test to verify that clicking the card opens the drawer handler.
 * 3. A test to verify that the drawer is rendered when state is true.
 * 4. A test to verify fallback image text is shown when image is missing.
 */
describe("UsedCarCard", () => {
	const mockCar = {
		id: 12,
		name: "Car Name",
		image: "test-image.jpg",
	};

	// Define behavior after each test
	afterEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: RENDER CARD
	 * Should render used car card correctly.
	 */
	it("should render used car card correctly", () => {
		render(<UsedCarCard usedCarOverview={mockCar} />);

		expect(
			screen.getByText("Car Name")
		).toBeInTheDocument();
	});

	/**
	 * CASE 2: CLICK CARD
	 * Should call drawer open handler on click.
	 */
	it("should call open drawer handler when clicking card", () => {
		render(<UsedCarCard usedCarOverview={mockCar} />);

		fireEvent.click(screen.getByRole("button"));

		expect(onUsedCarDrawerOpen).toHaveBeenCalledWith(
			expect.any(Function),
			12
		);
	});

	/**
	 * CASE 3: DRAWER RENDER
	 * Should render drawer when state is active.
	 */
	it("should render drawer when open", () => {
		render(<UsedCarCard usedCarOverview={mockCar} />);

		fireEvent.click(screen.getByRole("button"));

		expect(
			screen.getByTestId("used-car-drawer")
		).toBeInTheDocument();
	});

	/**
	 * CASE 4: FALLBACK IMAGE
	 * Should render fallback text when image is missing.
	 */
	it("should render fallback when image is missing", () => {
		const carWithoutImage = {
			id: 13,
			name: "Car Name",
		};

		render(
			<UsedCarCard usedCarOverview={carWithoutImage} />
		);

		expect(
			screen.getByText(
				USED_CARS_UNAVAILABLE_IMAGE_DESCRIPTION
			)
		).toBeInTheDocument();
	});
});
