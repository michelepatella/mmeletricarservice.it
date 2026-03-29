/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import { useDrawerBackButtonHandler } from "./use-drawer-back-button";
import { onUsedCarDrawerClose } from "../../../../handler/handler.js";
import { SentryReact } from "../../../../../../index.js";

// Mocks
jest.mock("../../../../handler/handler.js", () => ({
	onUsedCarDrawerClose: jest.fn(),
}));
jest.mock("../../../../../../index.js", () => ({
	SentryReact: {
		logger: {
			error: jest.fn(),
		},
	},
}));

/**
 * Test suite for useDrawerBackButtonHandler hook.
 * The test suite contains:
 * 1. A test verifying the registering popstate listener.
 * 2. A test verifying the cleaning up popstate listener on unmount.
 * 3. A test verifying the error logging on failure.
 */
describe("useDrawerBackButtonHandler", () => {
	// Define behavior before each test
	beforeEach(() => {
		jest.clearAllMocks();
	});

	/**
	 * CASE 1: EVENT LISTENER REGISTRATION
	 * Should register popstate listener on mount.
	 */
	it("should register popstate listener", () => {
		const addEventListenerSpy = jest.spyOn(
			// eslint-disable-next-line no-undef
			globalThis,
			"addEventListener"
		);

		const mockHandler = jest.fn();
		onUsedCarDrawerClose.mockReturnValue(mockHandler);

		renderHook(() => useDrawerBackButtonHandler(jest.fn()));

		expect(onUsedCarDrawerClose).toHaveBeenCalled();

		expect(addEventListenerSpy).toHaveBeenCalledWith(
			"popstate",
			mockHandler
		);
	});

	/**
	 * CASE 2: CLEANUP
	 * Should remove popstate listener on unmount.
	 */
	it("should remove popstate listener on unmount", () => {
		const removeEventListenerSpy = jest.spyOn(
			// eslint-disable-next-line no-undef
			globalThis,
			"removeEventListener"
		);

		const mockHandler = jest.fn();
		onUsedCarDrawerClose.mockReturnValue(mockHandler);

		const { unmount } = renderHook(() =>
			useDrawerBackButtonHandler(jest.fn())
		);

		unmount();

		expect(removeEventListenerSpy).toHaveBeenCalledWith(
			"popstate",
			mockHandler
		);
	});

	/**
	 * CASE 3: ERROR HANDLING (ADD LISTENER)
	 * Should log error if addEventListener throws.
	 */
	it("should log error if addEventListener fails", () => {
		const error = new Error("addEventListener failed");

		jest
			// eslint-disable-next-line no-undef
			.spyOn(globalThis, "addEventListener")
			.mockImplementation(() => {
				throw error;
			});

		renderHook(() => useDrawerBackButtonHandler(jest.fn()));

		expect(SentryReact.logger.error).toHaveBeenCalledWith(
			error,
			{
				context:
					"Register popstate listener for drawer back button",
			}
		);
	});

	/**
	 * CASE 4: ERROR HANDLING (REMOVE LISTENER)
	 * Should log error if removeEventListener fails.
	 */
	it("should log error if removeEventListener fails", () => {
		const error = new Error("removeEventListener failed");

		jest
			// eslint-disable-next-line no-undef
			.spyOn(globalThis, "removeEventListener")
			.mockImplementation(() => {
				throw error;
			});

		const { unmount } = renderHook(() =>
			useDrawerBackButtonHandler(jest.fn())
		);

		unmount();

		expect(SentryReact.logger.error).toHaveBeenCalledWith(
			error,
			{
				context:
					"Remove popstate listener for drawer back button",
			}
		);
	});
});
