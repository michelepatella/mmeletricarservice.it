/**
 * @jest-environment jsdom
 */

import { onUsedCarDrawerOpen, onUsedCarDrawerClose } from "./handler.js";
import { USED_CAR_DRAWER_OPEN_CLASS_NAME } from "../const.js";

// Mock
jest.mock("../../../index.js", () => ({
	SentryReact: {
		logger: {
			error: jest.fn(),
		},
	},
}));

/**
 * Test suite for the 'UsedCards' section handlers.
 * The test suite contains:
 * 1. A test to verify drawer open state is set correctly.
 * 2. A test to verify URL is updated correctly on open.
 * 3. A test to verify drawer close resets state.
 * 4. A test to verify URL is reset on close.
 * 5. A test to verify scroll position is restored on close.
 */
describe("'UsedCars' section handlers", () => {

	let setIsDrawerOpen;

    // Define behavior before each test
	beforeEach(() => {
		setIsDrawerOpen = jest.fn();

		// Reset history
		// eslint-disable-next-line no-undef
		globalThis.history.pushState = jest.fn();
		// eslint-disable-next-line no-undef
		globalThis.history.replaceState = jest.fn();

		// Reset scroll
		window.scrollY = 200;
	});

    // Define behavior after each test
	afterEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: OPEN DRAWER
	 * Should set drawer state to open when opening it.
	 */
	it("should set drawer state to open when opening it", () => {
		onUsedCarDrawerOpen(setIsDrawerOpen, "12");

		expect(setIsDrawerOpen).toHaveBeenCalledWith(true);
	});

	/**
	 * CASE 2: URL CHANGE
	 * Should update browser URL correctly when opening drawer.
	 */
	it("should update URL when opening drawer", () => {
		onUsedCarDrawerOpen(setIsDrawerOpen, "12");

		// eslint-disable-next-line no-undef
		expect(globalThis.history.pushState).toHaveBeenCalledWith(
			{ id: "12" },
			"",
			expect.stringContaining("12")
		);
	});

	/**
	 * CASE 3: CLOSE DRAWER
	 * Should reset drawer state when closing it.
	 */
	it("should reset drawer state when closing it", () => {
		onUsedCarDrawerClose(setIsDrawerOpen);

		expect(setIsDrawerOpen).toHaveBeenCalledWith(false);
	});

	/**
	 * CASE 4: URL RESET
	 * Should reset URL to root path on drawer close.
	 */
	it("should reset URL on drawer close", () => {
		onUsedCarDrawerClose(setIsDrawerOpen);

		// eslint-disable-next-line no-undef
		expect(globalThis.history.replaceState).toHaveBeenCalledWith(
			{},
			"",
			"/"
		);
	});

	/**
	 * CASE 6: SCROLL RESTORE
	 * Should restore previous scroll position on drawer close.
	 */
	it("should restore scroll position on drawer close", () => {
		window.scrollTo = jest.fn();

		onUsedCarDrawerClose(setIsDrawerOpen);

		expect(window.scrollTo).toHaveBeenCalled();
	});
});