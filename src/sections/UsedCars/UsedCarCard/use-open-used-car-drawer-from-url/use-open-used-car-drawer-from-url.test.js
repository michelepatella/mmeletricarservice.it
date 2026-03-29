/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import { useOpenUsedCarDrawerFromUrl } from "./use-open-used-car-drawer-from-url";
import { onUsedCarDrawerOpen } from "../../handler/handler.js";

// Mock
jest.mock("../../handler/handler.js", () => ({
	onUsedCarDrawerOpen: jest.fn(),
}));
jest.mock("../../../../index.js", () => ({
	SentryReact: {
		logger: {
			error: jest.fn(),
		},
	},
}));

/**
 * Test suite for useOpenUsedCarDrawerFromUrl hook.
 * The test suite contains:
 * 1. A test to verify no action is taken when id is missing.
 * 2. A test to verify drawer is not opened when URL does not match id.
 * 3. A test to verify hook does not crash on invalid URL.
 */
describe("useOpenUsedCarDrawerFromUrl", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: MISSING ID
	 * Should not attempt to open drawer when id is missing.
	 */
	it("should not open drawer when id is missing", () => {
		delete window.location;
		window.location = {
			pathname: "/auto-usate/12",
		};

		renderHook(() =>
			useOpenUsedCarDrawerFromUrl(jest.fn(), null)
		);

		expect(onUsedCarDrawerOpen).not.toHaveBeenCalled();
	});

	/**
	 * CASE 2: NON MATCHING ID
	 * Should not open drawer when URL id does not match.
	 */
	it("should not open drawer when URL does not match id", () => {
		const setIsDrawerOpen = jest.fn();

		delete window.location;
		window.location = {
			pathname: "/auto-usate/99",
		};

		renderHook(() =>
			useOpenUsedCarDrawerFromUrl(setIsDrawerOpen, "12")
		);

		expect(onUsedCarDrawerOpen).not.toHaveBeenCalled();
	});

	/**
	 * CASE 3: INVALID URL
	 * Should not crash when URL does not match expected pattern.
	 */
	it("should not crash on invalid URL", () => {
		const setIsDrawerOpen = jest.fn();

		delete window.location;
		window.location = {
			pathname: "/random-path",
		};

		renderHook(() =>
			useOpenUsedCarDrawerFromUrl(setIsDrawerOpen, "12")
		);

		expect(onUsedCarDrawerOpen).not.toHaveBeenCalled();
	});
});
